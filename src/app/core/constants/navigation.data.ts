import { NavigationItem } from '../models/navigation-item.model';

export const MAIN_NAVIGATION: NavigationItem[] = [
  { label: 'Home', route: '/' },
  { label: 'About Us', route: '/about' },
  { label: 'Services', route: '/services' },
  { label: 'Technologies', route: '/technologies' },
  { label: 'Portfolio', route: '/portfolio' },
  { label: 'Blog', route: '/blog' },
  { label: 'Contact', route: '/contact' },
];

export const CTA_NAV: NavigationItem = {
  label: 'Get a Quote',
  route: '/contact',
  isCta: true,
};

export const FOOTER_SERVICE_LINKS: NavigationItem[] = [
  { label: '.NET Development', route: '/services/dotnet-development' },
  { label: 'Angular Development', route: '/services/angular-development' },
  { label: 'API Development', route: '/services/api-development' },
  { label: 'SQL Server', route: '/services/sql-server-optimization' },
  { label: 'Azure Solutions', route: '/services/azure-cloud-solutions' },
  { label: 'Legacy Modernization', route: '/services/legacy-modernization' },
];
