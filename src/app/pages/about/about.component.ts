import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { SeoService } from '../../core/services/seo.service';
import { VALUES, WHY_CHOOSE_US } from '../../core/constants/company.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionTitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  private seoService = inject(SeoService);
  values = VALUES;
  whyChooseUs = WHY_CHOOSE_US;

  ngOnInit(): void {
    this.seoService.updateMetadata({
      title: 'About TheNewSoft | Modern Software Development Company',
      description:
        'Learn about TheNewSoft, a modern software development company specializing in custom software development, .NET, Angular, SQL Server, APIs, and cloud modernization solutions.',
      canonicalPath: '/about',
    });
  }
}
