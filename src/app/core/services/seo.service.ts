import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { COMPANY } from '../constants/company.data';

export interface SeoData {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  canonicalPath?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private document = inject(DOCUMENT);

  updateMetadata(data: SeoData): void {
    // Page title
    this.titleService.setTitle(data.title);

    // Meta description
    this.metaService.updateTag({ name: 'description', content: data.description });

    // Keywords
    if (data.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: data.keywords });
    }

    // Open Graph
    this.metaService.updateTag({ property: 'og:title', content: data.title });
    this.metaService.updateTag({ property: 'og:description', content: data.description });
    this.metaService.updateTag({ property: 'og:type', content: data.ogType || 'website' });
    this.metaService.updateTag({ property: 'og:url', content: `${COMPANY.domain}${data.canonicalPath || ''}` });
    this.metaService.updateTag({ property: 'og:site_name', content: COMPANY.name });

    if (data.ogImage) {
      this.metaService.updateTag({ property: 'og:image', content: data.ogImage });
    }

    // Twitter Card
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: data.title });
    this.metaService.updateTag({ name: 'twitter:description', content: data.description });

    // Canonical URL
    this.updateCanonicalUrl(`${COMPANY.domain}${data.canonicalPath || ''}`);
  }

  private updateCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
