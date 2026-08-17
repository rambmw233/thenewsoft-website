import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../../core/services/seo.service';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../../../core/constants/blog.data';
import { BlogPost, BlogCategory } from '../../../core/models/blog-post.model';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent implements OnInit {
  private seoService = inject(SeoService);

  allPosts = BLOG_POSTS;
  categories = BLOG_CATEGORIES;
  activeCategory = signal<BlogCategory>('All');
  searchQuery = signal('');

  featuredPost = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];

  filteredPosts = computed(() => {
    let posts = this.allPosts.filter(p => !p.featured);
    const category = this.activeCategory();
    const query = this.searchQuery().toLowerCase();

    if (category !== 'All') {
      posts = posts.filter(p => p.category === category);
    }
    if (query) {
      posts = posts.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query) ||
        p.tags.some(t => t.toLowerCase().includes(query))
      );
    }
    return posts;
  });

  ngOnInit(): void {
    this.seoService.updateMetadata({
      title: 'Software Development Insights & Technology Blog | TheNewSoft',
      description:
        'Read our latest articles on .NET development, Angular best practices, SQL Server optimization, Azure cloud solutions, and software architecture.',
      canonicalPath: '/blog',
    });
  }

  setCategory(cat: BlogCategory): void {
    this.activeCategory.set(cat);
  }

  onSearchInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchQuery.set(value);
  }
}
