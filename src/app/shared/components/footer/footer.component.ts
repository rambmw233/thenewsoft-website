import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MAIN_NAVIGATION, FOOTER_SERVICE_LINKS } from '../../../core/constants/navigation.data';
import { COMPANY, SOCIAL_LINKS } from '../../../core/constants/company.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  company = COMPANY;
  navLinks = MAIN_NAVIGATION;
  serviceLinks = FOOTER_SERVICE_LINKS;
  socialLinks = SOCIAL_LINKS;
  currentYear = new Date().getFullYear();
}
