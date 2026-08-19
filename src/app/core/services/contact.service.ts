import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

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

const EMAILJS_CONFIG = {
  serviceId: 'service_1xn9i29',
  templateId: 'template_k81qtib',
  publicKey: 'g3SbLfL1_IQXghFNl',
};

@Injectable({ providedIn: 'root' })
export class ContactService {
  async submitForm(data: ContactFormData): Promise<ContactResponse> {
    const templateParams = {
      full_name: data.name,
      company: data.company || 'N/A',
      email: data.email,
      phone: data.phone || 'N/A',
      service: data.projectType,
      budget: data.budgetRange || 'Not specified',
      message: data.description,
    };

    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      if (response.status === 200) {
        return {
          success: true,
          message: 'Thank you for your message! We will get back to you within 24 hours.',
        };
      } else {
        throw new Error(`EmailJS returned status code: ${response.status}`);
      }
    } catch (error) {
      console.error('EmailJS submission failed:', error);
      throw error;
    }
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
  'Website Development',
  'Mobile Application Development',
  'SaaS & CRM Solutions',
  'Other',
];

export const BUDGET_RANGES = [
  'Under ₹10,000',
  '₹10,000 - ₹30,000',
  '₹30,000 - ₹60,000',
  '₹60,000 - ₹1,00,000',
  '₹1,00,000+',
  'Not Sure',
];
