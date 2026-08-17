import { TechnologyGroup } from '../models/technology.model';

export const TECHNOLOGY_GROUPS: TechnologyGroup[] = [
  {
    category: 'Backend',
    description: 'Powerful server-side technologies for building robust and scalable applications.',
    technologies: [
      {
        name: '.NET',
        icon: 'dotnet',
        category: 'Backend',
        description: 'A free, cross-platform, open-source developer platform for building modern applications.',
        experience: 'Core technology for enterprise application development',
      },
      {
        name: 'ASP.NET Core',
        icon: 'aspnet',
        category: 'Backend',
        description: 'High-performance, cross-platform framework for building modern web applications and APIs.',
        experience: 'Primary framework for web applications and REST APIs',
      },
      {
        name: 'C#',
        icon: 'csharp',
        category: 'Backend',
        description: 'A modern, object-oriented programming language designed for building robust applications.',
        experience: 'Primary programming language for backend development',
      },
      {
        name: 'Web API',
        icon: 'api',
        category: 'Backend',
        description: 'Framework for building RESTful services that can be consumed by a broad range of clients.',
        experience: 'Building scalable RESTful APIs for web and mobile applications',
      },
      {
        name: 'Entity Framework Core',
        icon: 'ef',
        category: 'Backend',
        description: 'Modern object-relational mapper for .NET that simplifies data access.',
        experience: 'ORM for database operations and data modeling',
      },
    ],
  },
  {
    category: 'Frontend',
    description: 'Modern frontend technologies for creating dynamic and responsive user interfaces.',
    technologies: [
      {
        name: 'Angular',
        icon: 'angular',
        category: 'Frontend',
        description: 'A platform for building mobile and desktop web applications with TypeScript.',
        experience: 'Primary framework for building enterprise SPAs',
      },
      {
        name: 'TypeScript',
        icon: 'typescript',
        category: 'Frontend',
        description: 'A strongly typed programming language that builds on JavaScript.',
        experience: 'Type-safe development for Angular and Node.js applications',
      },
      {
        name: 'JavaScript',
        icon: 'javascript',
        category: 'Frontend',
        description: 'The programming language of the web, enabling dynamic and interactive experiences.',
        experience: 'Core language for web development and scripting',
      },
      {
        name: 'HTML5',
        icon: 'html5',
        category: 'Frontend',
        description: 'The latest standard of Hypertext Markup Language for structuring web content.',
        experience: 'Semantic markup and modern web standards',
      },
      {
        name: 'CSS3 / SCSS',
        icon: 'css3',
        category: 'Frontend',
        description: 'Modern styling with CSS3 features and SCSS preprocessor for maintainable stylesheets.',
        experience: 'Responsive design and component-level styling',
      },
    ],
  },
  {
    category: 'Database',
    description: 'Reliable database solutions for efficient data storage and retrieval.',
    technologies: [
      {
        name: 'SQL Server',
        icon: 'sqlserver',
        category: 'Database',
        description: 'Enterprise-grade relational database management system by Microsoft.',
        experience: 'Primary database for enterprise applications',
      },
      {
        name: 'Entity Framework',
        icon: 'ef',
        category: 'Database',
        description: 'ORM framework for .NET that provides data access using domain-specific objects.',
        experience: 'Database-first and code-first approaches',
      },
      {
        name: 'Database Optimization',
        icon: 'speed',
        category: 'Database',
        description: 'Performance tuning, indexing strategies, and query optimization techniques.',
        experience: 'Query optimization and performance tuning for large datasets',
      },
      {
        name: 'Stored Procedures',
        icon: 'terminal',
        category: 'Database',
        description: 'Pre-compiled SQL statements for improved performance and security.',
        experience: 'Complex business logic and data manipulation at the database level',
      },
    ],
  },
  {
    category: 'Cloud & DevOps',
    description: 'Cloud platforms and DevOps practices for reliable deployment and operations.',
    technologies: [
      {
        name: 'Microsoft Azure',
        icon: 'azure',
        category: 'Cloud & DevOps',
        description: 'Cloud computing platform with a wide range of services for building and deploying applications.',
        experience: 'Cloud hosting, serverless functions, and managed services',
      },
      {
        name: 'Docker',
        icon: 'docker',
        category: 'Cloud & DevOps',
        description: 'Platform for developing, shipping, and running applications in containers.',
        experience: 'Containerization for consistent development and deployment',
      },
      {
        name: 'Git',
        icon: 'git',
        category: 'Cloud & DevOps',
        description: 'Distributed version control system for tracking changes in source code.',
        experience: 'Version control and collaborative development workflows',
      },
      {
        name: 'GitHub',
        icon: 'github',
        category: 'Cloud & DevOps',
        description: 'Platform for version control and collaboration using Git repositories.',
        experience: 'Repository hosting, code review, and project management',
      },
      {
        name: 'CI/CD',
        icon: 'cicd',
        category: 'Cloud & DevOps',
        description: 'Continuous Integration and Continuous Deployment pipelines for automated builds and releases.',
        experience: 'Automated build, test, and deployment workflows',
      },
    ],
  },
];

// Flat list of all technologies for homepage display
export const ALL_TECHNOLOGIES = TECHNOLOGY_GROUPS.flatMap(g => g.technologies);

// Technologies shown on homepage (select key ones)
export const HOME_TECHNOLOGIES = [
  '.NET', 'ASP.NET Core', 'C#', 'Angular', 'TypeScript', 'JavaScript',
  'SQL Server', 'Entity Framework', 'Azure', 'Docker', 'REST API', 'Git'
];
