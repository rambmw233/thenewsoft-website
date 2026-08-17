import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeoService } from '../../core/services/seo.service';
import { ContactService, PROJECT_TYPES, BUDGET_RANGES } from '../../core/services/contact.service';
import { COMPANY_CONFIG } from '../../core/config/company.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  private seoService = inject(SeoService);
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);

  company = COMPANY_CONFIG;
  projectTypes = PROJECT_TYPES;
  budgetRanges = BUDGET_RANGES;

  contactForm!: FormGroup;
  isSubmitting = signal(false);
  isSubmitted = signal(false);
  submitMessage = signal('');
  submitError = signal(false);

  ngOnInit(): void {
    this.seoService.updateMetadata({
      title: 'Contact TheNewSoft | Start Your Software Project',
      description:
        'Contact TheNewSoft for custom software development, .NET, Angular, SQL Server, and Azure solutions. Get a free project consultation.',
      canonicalPath: '/contact',
    });

    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      phone: [''],
      projectType: ['', Validators.required],
      budgetRange: [''],
      description: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (!field || !field.errors) return '';

    if (field.errors['required']) return `${this.getFieldLabel(fieldName)} is required`;
    if (field.errors['email']) return 'Please enter a valid email address';
    if (field.errors['minlength']) {
      const minLen = field.errors['minlength'].requiredLength;
      return `Minimum ${minLen} characters required`;
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: Record<string, string> = {
      name: 'Name',
      email: 'Email',
      projectType: 'Project Type',
      description: 'Project Description',
    };
    return labels[fieldName] || fieldName;
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      Object.keys(this.contactForm.controls).forEach((key) => {
        this.contactForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.isSubmitting.set(true);
    this.submitError.set(false);

    try {
      const response = await this.contactService.submitForm(this.contactForm.value);
      this.isSubmitted.set(true);
      this.submitMessage.set(response.message);
      this.contactForm.reset();
    } catch {
      this.submitError.set(true);
      this.submitMessage.set('Something went wrong. Please try again or email us directly.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
