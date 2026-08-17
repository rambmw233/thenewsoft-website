import { Injectable } from '@angular/core';

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  budgetRange: string;
  description: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

/**
 * Contact form submission service.
 * Currently logs to console. Ready for integration with:
 * - ASP.NET Core API
 * - Azure Function
 * - Formspree or similar service
 *
 * To integrate with a backend API:
 * 1. Inject HttpClient
 * 2. Replace submitForm() with an HTTP POST call
 * 3. Add the API URL to environment config
 */
@Injectable({ providedIn: 'root' })
export class ContactService {

  async submitForm(data: ContactFormData): Promise<ContactResponse> {
    // Simulate API call - replace with actual HTTP call when backend is ready
    console.log('Contact form submission:', data);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Thank you for your inquiry! We will get back to you within 24 hours.',
        });
      }, 1500);
    });
  }
}

export const PROJECT_TYPES = [
  'Custom Software Development',
  '.NET Development',
  'Angular Development',
  'API Development',
  'Database Optimization',
  'Legacy Modernization',
  'Maintenance & Support',
  'Other',
];

export const BUDGET_RANGES = [
  'Under $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000+',
  'Not Sure',
];
