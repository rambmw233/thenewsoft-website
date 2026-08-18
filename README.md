# TheNewSoft — Official Website

> **Build. Modernize. Scale.**  
> Custom Software Development, .NET and ASP.NET Core, Angular, REST APIs, SQL Server Optimization, Cloud Solutions & Legacy Application Modernization.

Website: [https://thenewsoft.com](https://thenewsoft.com)

---

## 1. Project Overview

The official website for **TheNewSoft** is built with modern web technologies:
- **Angular 22** with TypeScript, SCSS, Standalone Components, and Signals.
- **Static Site Generation (SSG)**: All 25 public routes (Home, About, Services, Technologies, Portfolio, Blog, Contact, and detail pages) are pre-rendered into static HTML at build time for instant page loading and complete SEO indexing.
- **Enterprise Design System**: Dark navy hero sections (`#071426`, `#0B1B33`), blue gradient highlights (`#2563EB` to `#60A5FA`), clean typography with Google Font **Inter**, modern rounded cards, and responsive layouts.
- **Structured Data**: Organization JSON-LD, Open Graph, and Twitter Card metadata configured for search engines and social sharing.

---

## 2. Company Branding

- **Company Name**: TheNewSoft
- **Primary Tagline**: Build. Modernize. Scale.
- **Supporting Tagline**: Modern Software Solutions for Growing Businesses
- **Primary Canonical Domain**: `https://thenewsoft.com`
- **Secondary Domain**: `https://www.thenewsoft.com`

---

## 3. Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: `v20.x` or `v22.x` / `v24.x` (LTS recommended)
- **npm**: `v10.x` or later (bundled with Node.js)
- **Git**: For version control

Verify installed versions:
```bash
node -v
npm -v
```

---

## 4. Installation Steps

Clone the repository to your local system:
```bash
git clone https://github.com/your-username/thenewsoft.git
cd thenewsoft
```

---

## 5. Install Dependencies

Install all required project dependencies:
```bash
npm install
```

---

## 6. Development Server

To launch the local development server:
```bash
npm start
# or
npx ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any source files.

---

## 7. Production Build

To compile the application with static pre-rendering (SSG):
```bash
npm run build
# or
npx ng build
```

The production bundle is generated in:
```
dist/thenewsoft/browser/
```
*(Ready for static hosting on Cloudflare Pages, Netlify, Vercel, or AWS S3).*

---

## 8. Project Structure

```
├── public/                          # Static assets copied directly to build output
│   ├── favicon.ico
│   ├── favicon.svg                  # TheNewSoft SVG logo icon
│   ├── robots.txt                   # Search crawler directives
│   ├── sitemap.xml                  # XML Sitemap for thenewsoft.com
│   ├── _redirects                   # Cloudflare Pages SPA routing fallback
│   └── _headers                     # Security and edge caching headers
├── src/
│   ├── app/
│   │   ├── core/                    # Core business logic, configuration & data
│   │   │   ├── config/              # Centralized company configuration
│   │   │   │   └── company.config.ts
│   │   │   ├── constants/           # Centralized content data
│   │   │   │   ├── blog.data.ts
│   │   │   │   ├── company.data.ts
│   │   │   │   ├── navigation.data.ts
│   │   │   │   ├── portfolio.data.ts
│   │   │   │   ├── services.data.ts
│   │   │   │   └── technologies.data.ts
│   │   │   ├── models/              # TypeScript interfaces
│   │   │   │   ├── blog-post.model.ts
│   │   │   │   ├── navigation-item.model.ts
│   │   │   │   ├── portfolio-project.model.ts
│   │   │   │   ├── service.model.ts
│   │   │   │   └── technology.model.ts
│   │   │   └── services/            # Angular services
│   │   │       ├── contact.service.ts
│   │   │       ├── scroll-animation.service.ts
│   │   │       └── seo.service.ts
│   │   ├── pages/                   # Lazy-loaded page components
│   │   │   ├── about/
│   │   │   ├── blog/
│   │   │   │   ├── blog-list/
│   │   │   │   └── blog-detail/
│   │   │   ├── contact/
│   │   │   ├── home/
│   │   │   ├── portfolio/
│   │   │   │   ├── portfolio-list/
│   │   │   │   └── portfolio-detail/
│   │   │   ├── services/
│   │   │   │   ├── services-list/
│   │   │   │   └── service-detail/
│   │   │   └── technologies/
│   │   ├── shared/                  # Reusable UI components
│   │   │   └── components/
│   │   │       ├── footer/
│   │   │       ├── header/
│   │   │       └── section-title/
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts            # Client-side routes
│   │   └── app.routes.server.ts     # Static pre-rendering (SSG) configuration
│   ├── styles/                      # Design system (SCSS)
│   │   ├── _animations.scss
│   │   ├── _mixins.scss
│   │   ├── _reset.scss
│   │   ├── _typography.scss
│   │   └── _variables.scss
│   ├── index.html                   # Base HTML with JSON-LD & OG tags
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
└── tsconfig.json
```

---

## 9. Centralized Company Configuration

All company branding, domain URLs, contact emails, and social profiles are centralized in:
```typescript
// src/app/core/config/company.config.ts
export const COMPANY_CONFIG = {
  companyName: 'TheNewSoft',
  domain: 'thenewsoft.com',
  websiteUrl: 'https://thenewsoft.com',
  tagline: 'Build. Modernize. Scale.',
  supportingTagline: 'Modern Software Solutions for Growing Businesses',
  description: 'TheNewSoft helps businesses build, modernize and scale reliable software solutions using modern technologies.',
  email: 'rambmw233@gmail.com',
  phone: '+91 98343 98427',
  phoneRaw: '+919834398427',
  socialLinks: [
    { name: 'LinkedIn', url: '#', icon: 'linkedin' },
    { name: 'GitHub', url: '#', icon: 'github' },
    { name: 'Email', url: 'mailto:rambmw233@gmail.com', icon: 'email' },
    { name: 'Phone', url: 'tel:+919834398427', icon: 'phone' },
  ],
};
```

---

## 10. How to Update Content

- **Company Info & Social Links**: Edit `src/app/core/config/company.config.ts`.
- **Services**: Edit `src/app/core/constants/services.data.ts` to add or update service items and features.
- **Technologies Stack**: Edit `src/app/core/constants/technologies.data.ts` to modify categorized skills.
- **Portfolio & Case Studies**: Edit `src/app/core/constants/portfolio.data.ts`.
- **Blog Articles**: Edit `src/app/core/constants/blog.data.ts` to publish new technical posts.

---

## 11. How to Deploy to Cloudflare Pages

### Option A: Cloudflare Pages Git Integration (Recommended)

1. Push your repository to GitHub or GitLab.
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/), go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository.
4. Set Build configuration:
   - **Framework preset**: `None` or `Angular`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist/thenewsoft/browser`
   - **Environment variables**: Add `NODE_VERSION` = `20`
5. Click **Save and Deploy**.

### Option B: Cloudflare Wrangler CLI

```bash
# Install Wrangler globally
npm install -g wrangler

# Build the application
npm run build

# Deploy output folder
wrangler pages deploy dist/thenewsoft/browser --project-name=thenewsoft
```

---

## 12. How to Connect `thenewsoft.com` and `www.thenewsoft.com`

1. In the Cloudflare Dashboard, go to your project in **Workers & Pages** > **Custom domains**.
2. Click **Set up a custom domain** and enter `thenewsoft.com`.
3. Click **Set up a custom domain** again and add `www.thenewsoft.com`.
4. Under **Rules** > **Redirect Rules**, set up a 301 Permanent Redirect from `https://www.thenewsoft.com/*` to `https://thenewsoft.com/$1` (or vice versa).
5. In **SSL/TLS** > **Edge Certificates**, enable **Always Use HTTPS**.

---

## 13. How to Connect the Project to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "feat: complete TheNewSoft website with Angular 22 and SSG"

# Link to your remote GitHub repository
git branch -M main
git remote add origin https://github.com/your-username/thenewsoft.git

# Push to GitHub
git push -u origin main
```

---

## 14. License

© 2026 TheNewSoft. All rights reserved.
