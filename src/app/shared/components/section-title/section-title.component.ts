import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-title" [class.center]="align === 'center'" [class.light]="theme === 'light'">
      @if (subtitle) {
        <span class="section-title__subtitle">{{ subtitle }}</span>
      }
      <h2 class="section-title__heading">{{ heading }}</h2>
      @if (description) {
        <p class="section-title__description">{{ description }}</p>
      }
    </div>
  `,
  styleUrl: './section-title.component.scss',
})
export class SectionTitleComponent {
  @Input() subtitle = '';
  @Input() heading = '';
  @Input() description = '';
  @Input() align: 'center' | 'left' = 'center';
  @Input() theme: 'dark' | 'light' = 'dark';
}
