import { Component, OnInit, OnDestroy, AfterViewInit, inject, PLATFORM_ID, ChangeDetectorRef, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { SeoService } from '../../core/services/seo.service';
import { ScrollAnimationService } from '../../core/services/scroll-animation.service';
import { HOME_SERVICES } from '../../core/constants/services.data';
import { STATS, WHY_CHOOSE_US, PROCESS_STEPS } from '../../core/constants/company.data';
import { HOME_TECHNOLOGIES } from '../../core/constants/technologies.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private seoService = inject(SeoService);
  private scrollAnimationService = inject(ScrollAnimationService);
  private platformId = inject(PLATFORM_ID);
  private cdr = inject(ChangeDetectorRef);

  services = HOME_SERVICES;
  stats = STATS;
  whyChooseUs = WHY_CHOOSE_US;
  processSteps = PROCESS_STEPS;
  homeTechnologies = HOME_TECHNOLOGIES;

  // Counter animation state using signal
  counterValues = signal<number[]>([]);
  private counterAnimated = false;
  private counterObserver: IntersectionObserver | null = null;

  ngOnInit(): void {
    this.seoService.updateMetadata({
      title: 'TheNewSoft | Custom Software Development & Modernization',
      description:
        'TheNewSoft provides custom software development, .NET and ASP.NET Core development, Angular applications, API development, SQL Server optimization, cloud solutions and legacy application modernization.',
      keywords:
        '.NET, Angular, ASP.NET Core, SQL Server, Azure, custom software development, API development, legacy modernization, TheNewSoft',
      canonicalPath: '/',
    });

    this.counterValues.set(this.stats.map(() => 0));
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.scrollAnimationService.init();

    setTimeout(() => {
      this.scrollAnimationService.observeAll('.animate-on-scroll');
      this.setupCounterObserver();
    }, 100);
  }

  ngOnDestroy(): void {
    this.scrollAnimationService.disconnect();
    this.counterObserver?.disconnect();
  }

  private setupCounterObserver(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const statsSection = document.querySelector('.statistics');
    if (!statsSection) return;

    this.counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.counterAnimated) {
            this.counterAnimated = true;
            this.animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    this.counterObserver.observe(statsSection);
  }

  private animateCounters(): void {
    this.stats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;
      const interval = duration / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          this.counterValues.update((vals) => {
            const next = [...vals];
            next[index] = stat.value;
            return next;
          });
          this.cdr.markForCheck();
          clearInterval(timer);
        } else {
          this.counterValues.update((vals) => {
            const next = [...vals];
            next[index] = Math.floor(current);
            return next;
          });
          this.cdr.markForCheck();
        }
      }, interval);
    });
  }

  getServiceIcon(iconName: string): string {
    const icons: Record<string, string> = {
      code: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
      web: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z',
      storage: 'M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z',
      cloud: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z',
      update: 'M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.5-9.11 0-12.58 3.51-3.47 9.14-3.49 12.65 0L21 3v7.12z',
      build: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
    };
    return icons[iconName] || icons['code'];
  }

  getTechIcon(techName: string): string {
    // Returns short abbreviation for tech badge display
    const abbrevs: Record<string, string> = {
      '.NET': '.NET',
      'ASP.NET Core': 'ASP',
      'C#': 'C#',
      'Angular': 'Ng',
      'TypeScript': 'TS',
      'JavaScript': 'JS',
      'SQL Server': 'SQL',
      'Entity Framework': 'EF',
      'Azure': 'Az',
      'Docker': 'Dk',
      'REST API': 'API',
      'Git': 'Git',
    };
    return abbrevs[techName] || techName.substring(0, 3);
  }
}
