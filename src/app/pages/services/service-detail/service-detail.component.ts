import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { SERVICES } from '../../../core/constants/services.data';
import { ServiceItem } from '../../../core/models/service.model';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (service) {
      <section class="page-hero section--gradient">
        <div class="container">
          <h1 class="page-hero__title">{{ service.title }}</h1>
          <p class="page-hero__subtitle">{{ service.shortDescription }}</p>
        </div>
      </section>

      <section class="detail section">
        <div class="container">
          <div class="detail__grid">
            <div class="detail__content">
              <h2>Overview</h2>
              <p>{{ service.description }}</p>

              <h3>Key Features</h3>
              <ul class="detail__features">
                @for (f of service.features; track f) {
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    {{ f }}
                  </li>
                }
              </ul>
            </div>
            <div class="detail__sidebar">
              <div class="detail__tech-card">
                <h4>Technologies</h4>
                <div class="detail__tags">
                  @for (t of service.technologies; track t) {
                    <span class="detail__tag">{{ t }}</span>
                  }
                </div>
              </div>
              <a routerLink="/contact" class="detail__cta">Get a Quote</a>
              <a routerLink="/services" class="detail__back">← Back to Services</a>
            </div>
          </div>
        </div>
      </section>
    } @else {
      <section class="page-hero section--gradient">
        <div class="container">
          <h1 class="page-hero__title">Service Not Found</h1>
          <p class="page-hero__subtitle"><a routerLink="/services" style="color:var(--color-primary-light)">View all services</a></p>
        </div>
      </section>
    }
  `,
  styleUrl: './service-detail.component.scss',
})
export class ServiceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private seoService = inject(SeoService);
  service: ServiceItem | undefined;

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.service = SERVICES.find(s => s.slug === slug);

    if (this.service) {
      this.seoService.updateMetadata({
        title: `${this.service.title} | TheNewSoft`,
        description: this.service.shortDescription,
        canonicalPath: `/services/${this.service.slug}`,
      });
    }
  }
}
