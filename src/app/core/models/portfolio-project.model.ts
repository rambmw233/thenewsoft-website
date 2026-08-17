export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  category: string;
  thumbnail: string;
  challenge: string;
  solution: string;
  technologies: string[];
  features: string[];
  results: string[];
  isDemo: boolean;
}
