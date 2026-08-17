import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { PORTFOLIO_PROJECTS } from '../../../core/constants/portfolio.data';

@Component({
  selector: 'app-portfolio-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio-list.component.html',
  styleUrl: './portfolio-list.component.scss',
})
export class PortfolioListComponent implements OnInit {
  private seoService = inject(SeoService);
  projects = PORTFOLIO_PROJECTS;

  ngOnInit(): void {
    this.seoService.updateMetadata({
      title: 'Software Projects & Case Studies | TheNewSoft',
      description:
        'Explore our portfolio of software development projects including order management systems, CRM solutions, legacy modernization, and reporting dashboards.',
      canonicalPath: '/portfolio',
    });
  }
}
