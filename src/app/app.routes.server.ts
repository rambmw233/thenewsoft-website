import { RenderMode, ServerRoute } from '@angular/ssr';
import { SERVICES } from './core/constants/services.data';
import { PORTFOLIO_PROJECTS } from './core/constants/portfolio.data';
import { BLOG_POSTS } from './core/constants/blog.data';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'about', renderMode: RenderMode.Prerender },
  { path: 'services', renderMode: RenderMode.Prerender },
  {
    path: 'services/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => SERVICES.map(s => ({ slug: s.slug })),
  },
  { path: 'technologies', renderMode: RenderMode.Prerender },
  { path: 'portfolio', renderMode: RenderMode.Prerender },
  {
    path: 'portfolio/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => PORTFOLIO_PROJECTS.map(p => ({ slug: p.slug })),
  },
  { path: 'blog', renderMode: RenderMode.Prerender },
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => BLOG_POSTS.map(b => ({ slug: b.slug })),
  },
  { path: 'contact', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Client },
];

