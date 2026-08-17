import { COMPANY_CONFIG, SocialLink } from '../config/company.config';

export { COMPANY_CONFIG };
export type { SocialLink };

export const COMPANY = {
  name: COMPANY_CONFIG.companyName,
  domain: COMPANY_CONFIG.websiteUrl,
  tagline: COMPANY_CONFIG.tagline,
  supportingTagline: COMPANY_CONFIG.supportingTagline,
  marketingMessage: COMPANY_CONFIG.tagline,
  description: COMPANY_CONFIG.description,
  email: COMPANY_CONFIG.email,
  phone: COMPANY_CONFIG.phone,
  phoneRaw: COMPANY_CONFIG.phoneRaw,
  copyright: COMPANY_CONFIG.copyright,
};

export interface HighlightMetric {
  title: string;
  subtitle: string;
  icon: string;
  value?: number;
  suffix?: string;
}

export const HIGHLIGHT_METRICS: HighlightMetric[] = [
  {
    title: 'Custom Solutions',
    subtitle: 'Tailored for Business Growth',
    icon: 'code',
    value: 100,
    suffix: '%',
  },
  {
    title: 'Modern Stack',
    subtitle: '.NET, Angular & Cloud',
    icon: 'memory',
    value: 10,
    suffix: '+',
  },
  {
    title: 'Scalable Architecture',
    subtitle: 'Engineered for Performance',
    icon: 'trending_up',
    value: 24,
    suffix: '/7',
  },
  {
    title: 'Quality Focused',
    subtitle: 'Agile & Secure Delivery',
    icon: 'verified',
    value: 100,
    suffix: '%',
  },
];

// Re-export for backward compatibility with components using STATS
export const STATS = HIGHLIGHT_METRICS.map(m => ({
  value: m.value ?? 100,
  suffix: m.suffix ?? '+',
  label: m.title,
  icon: m.icon,
}));

export const SOCIAL_LINKS = COMPANY_CONFIG.socialLinks;

export const VALUES: { title: string; description: string; icon: string }[] = [
  {
    title: 'Quality',
    description: 'We deliver high-quality, well-tested software that meets the highest engineering standards.',
    icon: 'star',
  },
  {
    title: 'Transparency',
    description: 'Clear communication and regular updates throughout every stage of development.',
    icon: 'visibility',
  },
  {
    title: 'Innovation',
    description: 'We leverage modern .NET, Angular, database, and cloud technologies to build high-performance solutions.',
    icon: 'lightbulb',
  },
  {
    title: 'Security',
    description: 'Security-first architecture in every application, API, and cloud deployment we build.',
    icon: 'shield',
  },
  {
    title: 'Continuous Improvement',
    description: 'We continuously adapt modern engineering practices to deliver superior software performance.',
    icon: 'autorenew',
  },
  {
    title: 'Long-Term Partnership',
    description: 'We build lasting relationships through reliable delivery, maintenance, and dedicated support.',
    icon: 'handshake',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand business requirements, challenges, and project goals.',
    icon: 'search',
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Define technical architecture, data model, and implementation roadmap.',
    icon: 'architecture',
  },
  {
    step: '03',
    title: 'Design & Develop',
    description: 'Build secure, scalable, and maintainable software using modern technologies.',
    icon: 'code',
  },
  {
    step: '04',
    title: 'Test',
    description: 'Perform rigorous automated and manual quality and security checks.',
    icon: 'bug_report',
  },
  {
    step: '05',
    title: 'Deploy',
    description: 'Deploy the application to cloud production environments with CI/CD automation.',
    icon: 'rocket_launch',
  },
  {
    step: '06',
    title: 'Support',
    description: 'Provide ongoing monitoring, optimization, and future enhancements.',
    icon: 'support_agent',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Experienced Development',
    description: 'Build reliable and scalable software using modern .NET, Angular, and cloud best practices.',
    icon: 'engineering',
  },
  {
    title: 'Business-Focused Solutions',
    description: 'We focus on understanding your business goals before writing a single line of code.',
    icon: 'business_center',
  },
  {
    title: 'Modern Technology Stack',
    description: 'We utilize ASP.NET Core, Angular, SQL Server, Azure, and modern API standards.',
    icon: 'memory',
  },
  {
    title: 'Scalable Architecture',
    description: 'Software solutions designed and engineered to scale seamlessly as your business grows.',
    icon: 'trending_up',
  },
  {
    title: 'Transparent Communication',
    description: 'Regular project updates and direct communication throughout the development cycle.',
    icon: 'forum',
  },
  {
    title: 'Long-Term Support',
    description: 'Reliable application maintenance, proactive monitoring, and ongoing optimization.',
    icon: 'build_circle',
  },
];
