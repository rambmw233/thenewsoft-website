import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
import { TECHNOLOGY_GROUPS } from '../../core/constants/technologies.data';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent implements OnInit {
  private seoService = inject(SeoService);
  technologyGroups = TECHNOLOGY_GROUPS;

  ngOnInit(): void {
    this.seoService.updateMetadata({
      title: 'Technologies | .NET, Angular, SQL Server & Azure | TheNewSoft',
      description:
        'Explore the technologies TheNewSoft uses: .NET, ASP.NET Core, Angular, TypeScript, SQL Server, Azure, Docker, and cloud solutions.',
      canonicalPath: '/technologies',
    });
  }
}
