import { Component, HostListener, inject, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MAIN_NAVIGATION, CTA_NAV } from '../../../core/constants/navigation.data';
import { COMPANY } from '../../../core/constants/company.data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private platformId = inject(PLATFORM_ID);
  navItems = MAIN_NAVIGATION;
  ctaNav = CTA_NAV;
  company = COMPANY;
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(window.scrollY > 50);
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = this.isMobileMenuOpen() ? 'hidden' : '';
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }
}
