export interface Technology {
  name: string;
  icon: string;
  category: TechnologyCategory;
  description: string;
  experience: string;
}

export type TechnologyCategory = 'Backend' | 'Frontend' | 'Database' | 'Cloud & DevOps';

export interface TechnologyGroup {
  category: TechnologyCategory;
  description: string;
  technologies: Technology[];
}
