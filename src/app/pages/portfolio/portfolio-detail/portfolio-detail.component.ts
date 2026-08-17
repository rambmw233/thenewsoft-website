import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { PORTFOLIO_PROJECTS } from '../../../core/constants/portfolio.data';
import { PortfolioProject } from '../../../core/models/portfolio-project.model';

@Component({
  selector: 'app-portfolio-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (project) {
      <section class="page-hero section--gradient">
        <div class="container">
          <span class="page-hero__cat">{{ project.category }}</span>
          <h1 class="page-hero__title">{{ project.title }}</h1>
        </div>
      </section>

      <section class="pdetail section">
        <div class="container">
          <div class="pdetail__grid">
            <div class="pdetail__main">
              <div class="pdetail__block">
                <h2>Challenge</h2>
                <p>{{ project.challenge }}</p>
              </div>
              <div class="pdetail__block">
                <h2>Solution</h2>
                <p>{{ project.solution }}</p>
              </div>
              <div class="pdetail__block">
                <h2>Key Features</h2>
                <ul>
                  @for (f of project.features; track f) {
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      {{ f }}
                    </li>
                  }
                </ul>
              </div>
              <div class="pdetail__block">
                <h2>Results</h2>
                <ul>
                  @for (r of project.results; track r) {
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-primary)"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
                      {{ r }}
                    </li>
                  }
                </ul>
              </div>
            </div>
            <div class="pdetail__sidebar">
              <div class="pdetail__tech-card">
                <h4>Technologies Used</h4>
                <div class="pdetail__tags">
                  @for (t of project.technologies; track t) {
                    <span class="pdetail__tag">{{ t }}</span>
                  }
                </div>
              </div>
              <a routerLink="/contact" class="pdetail__cta">Start a Similar Project</a>
              <a routerLink="/portfolio" class="pdetail__back">← Back to Portfolio</a>
            </div>
          </div>
        </div>
      </section>
    } @else {
      <section class="page-hero section--gradient">
        <div class="container">
          <h1 class="page-hero__title">Project Not Found</h1>
          <p class="page-hero__subtitle"><a routerLink="/portfolio" style="color:var(--color-primary-light)">View all projects</a></p>
        </div>
      </section>
    }
  `,
  styleUrl: './portfolio-detail.component.scss',
})
export class PortfolioDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private seoService = inject(SeoService);
  project: PortfolioProject | undefined;

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.project = PORTFOLIO_PROJECTS.find(p => p.slug === slug);
    if (this.project) {
      this.seoService.updateMetadata({
        title: `${this.project.title} | TheNewSoft`,
        description: this.project.challenge.substring(0, 160),
        canonicalPath: `/portfolio/${this.project.slug}`,
      });
    }
  }
}
