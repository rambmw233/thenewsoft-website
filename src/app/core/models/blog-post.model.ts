export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  date: string;
  author: string;
  readTime: string;
  featured: boolean;
  tags: string[];
  thumbnail: string;
}

export type BlogCategory =
  | 'All'
  | '.NET'
  | 'Angular'
  | 'SQL Server'
  | 'Azure'
  | 'Architecture'
  | 'Best Practices';
