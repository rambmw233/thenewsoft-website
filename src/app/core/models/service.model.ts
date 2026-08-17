export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  technologies: string[];
  slug: string;
}

export interface ServiceCategory {
  title: string;
  services: ServiceItem[];
}
