export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  outcome: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  problem: string;
  strategy: string;
  results: string;
  image: string;
}

export interface ScannerQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    score: number;
    category: 'visibility' | 'leads' | 'branding' | 'social' | 'website';
  }[];
}

export interface ScannerResult {
  overallScore: number;
  categories: {
    visibility: number;
    leads: number;
    branding: number;
    social: number;
    website: number;
  };
}
