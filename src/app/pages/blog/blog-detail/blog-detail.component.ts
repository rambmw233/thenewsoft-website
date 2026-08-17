import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { BLOG_POSTS } from '../../../core/constants/blog.data';
import { BlogPost } from '../../../core/models/blog-post.model';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (post) {
      <section class="page-hero section--gradient">
        <div class="container">
          <span class="blog-detail__cat">{{ post.category }}</span>
          <h1 class="page-hero__title">{{ post.title }}</h1>
          <div class="blog-detail__meta">
            <span>{{ post.author }}</span>
            <span>·</span>
            <span>{{ post.date }}</span>
            <span>·</span>
            <span>{{ post.readTime }}</span>
          </div>
        </div>
      </section>

      <section class="blog-detail section">
        <div class="container">
          <div class="blog-detail__grid">
            <article class="blog-detail__content" [innerHTML]="post.content"></article>
            <aside class="blog-detail__sidebar">
              <div class="blog-detail__tags-card">
                <h4>Tags</h4>
                <div class="blog-detail__tags">
                  @for (tag of post.tags; track tag) {
                    <span class="blog-detail__tag">{{ tag }}</span>
                  }
                </div>
              </div>
              <div class="blog-detail__related-card">
                <h4>More Articles</h4>
                @for (related of relatedPosts; track related.id) {
                  <a [routerLink]="['/blog', related.slug]" class="blog-detail__related-link">{{ related.title }}</a>
                }
              </div>
              <a routerLink="/blog" class="blog-detail__back">← Back to Blog</a>
            </aside>
          </div>
        </div>
      </section>
    } @else {
      <section class="page-hero section--gradient">
        <div class="container">
          <h1 class="page-hero__title">Article Not Found</h1>
          <p><a routerLink="/blog" style="color:var(--color-primary-light)">View all articles</a></p>
        </div>
      </section>
    }
  `,
  styleUrl: './blog-detail.component.scss',
})
export class BlogDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private seoService = inject(SeoService);

  post: BlogPost | undefined;
  relatedPosts: BlogPost[] = [];

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.post = BLOG_POSTS.find(p => p.slug === slug);

    if (this.post) {
      this.seoService.updateMetadata({
        title: `${this.post.title} | TheNewSoft Blog`,
        description: this.post.excerpt,
        ogType: 'article',
        canonicalPath: `/blog/${this.post.slug}`,
      });

      this.relatedPosts = BLOG_POSTS
        .filter(p => p.id !== this.post!.id)
        .slice(0, 3);
    }
  }
}
