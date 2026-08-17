import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScrollAnimationService {
  private platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  init(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );
  }

  observe(element: Element): void {
    if (this.observer) {
      this.observer.observe(element);
    }
  }

  observeAll(selector: string, root?: Element): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const container = root || document;
    const elements = container.querySelectorAll(selector);
    elements.forEach((el) => this.observe(el));
  }

  disconnect(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
