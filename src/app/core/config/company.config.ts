export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface CompanyConfig {
  companyName: string;
  domain: string;
  websiteUrl: string;
  tagline: string;
  supportingTagline: string;
  description: string;
  email: string;
  phone: string;
  phoneRaw: string;
  copyright: string;
  socialLinks: SocialLink[];
}

export const COMPANY_CONFIG: CompanyConfig = {
  companyName: 'TheNewSoft',
  domain: 'thenewsoft.com',
  websiteUrl: 'https://thenewsoft.com',
  tagline: 'Build. Modernize. Scale.',
  supportingTagline: 'Modern Software Solutions for Growing Businesses',
  description:
    'TheNewSoft helps businesses build, modernize and scale reliable software solutions using modern technologies.',
  email: 'contactthenewsoft@gmail.com',
  phone: '+91 98343 98427',
  phoneRaw: '+919834398427',
  copyright: `© ${new Date().getFullYear()} TheNewSoft. All rights reserved.`,
  socialLinks: [
    { name: 'LinkedIn', url: '#', icon: 'linkedin' },
    { name: 'GitHub', url: '#', icon: 'github' },
    { name: 'Email', url: 'mailto:contactthenewsoft@gmail.com', icon: 'email' },
    { name: 'Phone', url: 'tel:+919834398427', icon: 'phone' },
  ],
};
