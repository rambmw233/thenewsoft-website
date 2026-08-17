import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { SERVICES } from '../../../core/constants/services.data';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.scss',
})
export class ServicesListComponent implements OnInit {
  private seoService = inject(SeoService);
  services = SERVICES;

  ngOnInit(): void {
    this.seoService.updateMetadata({
      title: 'Software Development Services | TheNewSoft',
      description:
        'Explore our software development services including custom software, .NET development, Angular, API development, SQL Server optimization, Azure cloud solutions, and legacy application modernization.',
      canonicalPath: '/services',
    });
  }
}
