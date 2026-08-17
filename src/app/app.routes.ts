import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services-list/services-list.component').then(m => m.ServicesListComponent),
  },
  {
    path: 'services/:slug',
    loadComponent: () => import('./pages/services/service-detail/service-detail.component').then(m => m.ServiceDetailComponent),
  },
  {
    path: 'technologies',
    loadComponent: () => import('./pages/technologies/technologies.component').then(m => m.TechnologiesComponent),
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./pages/portfolio/portfolio-list/portfolio-list.component').then(m => m.PortfolioListComponent),
  },
  {
    path: 'portfolio/:slug',
    loadComponent: () => import('./pages/portfolio/portfolio-detail/portfolio-detail.component').then(m => m.PortfolioDetailComponent),
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog-list/blog-list.component').then(m => m.BlogListComponent),
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./pages/blog/blog-detail/blog-detail.component').then(m => m.BlogDetailComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
