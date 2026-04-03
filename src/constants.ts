import { Service, Testimonial, CaseStudy, ScannerQuestion } from './types';

export const SERVICES: Service[] = [
  {
    id: 'smm',
    title: 'Social Media Management',
    description: 'Complete handling of your social presence to build community and trust.',
    icon: 'Users',
    featured: true
  },
  {
    id: 'sm-marketing',
    title: 'Social Media Marketing',
    description: 'Strategic campaigns designed to convert followers into loyal customers.',
    icon: 'TrendingUp',
    featured: true
  },
  {
    id: 'pr',
    title: 'PR & Brand Awareness',
    description: 'Getting your brand featured where it matters most to build authority.',
    icon: 'Megaphone',
    featured: true
  },
  {
    id: 'web-design',
    title: 'Website Design',
    description: 'High-converting, premium websites that turn visitors into leads.',
    icon: 'Layout'
  },
  {
    id: 'paid-ads',
    title: 'Paid Advertising',
    description: 'Aggressive ROI-focused campaigns on Meta, Google, and LinkedIn.',
    icon: 'Target'
  },
  {
    id: 'content',
    title: 'Content Creation',
    description: 'Cinematic visuals and copy that demand attention in a crowded feed.',
    icon: 'Video'
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Developing a visual identity that positions you as a premium leader.',
    icon: 'Palette'
  },
  {
    id: 'seo',
    title: 'SEO',
    description: 'Dominating search results so customers find you first.',
    icon: 'Search'
  },
  {
    id: 'lead-gen',
    title: 'Lead Generation',
    description: 'Building automated systems that fill your pipeline daily.',
    icon: 'UserPlus'
  },
  {
    id: 'funnels',
    title: 'Funnel Building',
    description: 'Optimized customer journeys that maximize lifetime value.',
    icon: 'Filter'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CEO',
    company: 'Luxe Interiors',
    content: 'Marxlyte transformed our invisible brand into a market leader. Our leads increased by 300% in just 3 months.',
    image: 'https://picsum.photos/seed/sarah/200/200',
    outcome: '+300% Lead Growth'
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Founder',
    company: 'TechFlow Solutions',
    content: 'The Business Growth Scanner was a wake-up call. Their strategy fixed our leaking funnel immediately.',
    image: 'https://picsum.photos/seed/marcus/200/200',
    outcome: '2.4x Revenue Increase'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Marketing Director',
    company: 'Nova Beauty',
    content: 'Finally, an agency that actually brings customers instead of just vanity metrics. Aggressive and effective.',
    image: 'https://picsum.photos/seed/elena/200/200',
    outcome: '50k+ New Followers'
  }
];

export const SCANNER_QUESTIONS: ScannerQuestion[] = [
  {
    id: 1,
    question: "How often do you post on social media?",
    options: [
      { label: "Daily", score: 90, category: 'social' },
      { label: "Weekly", score: 60, category: 'social' },
      { label: "Rarely", score: 30, category: 'social' },
      { label: "Never", score: 0, category: 'social' }
    ]
  },
  {
    id: 2,
    question: "Do you currently run paid advertisements?",
    options: [
      { label: "Yes, consistently", score: 95, category: 'leads' },
      { label: "Sometimes", score: 60, category: 'leads' },
      { label: "Rarely", score: 30, category: 'leads' },
      { label: "Never", score: 0, category: 'leads' }
    ]
  },
  {
    id: 3,
    question: "Does your business have a website?",
    options: [
      { label: "Yes, and it performs well", score: 95, category: 'website' },
      { label: "Yes, but it needs improvement", score: 50, category: 'website' },
      { label: "No website yet", score: 0, category: 'website' }
    ]
  },
  {
    id: 4,
    question: "How do most customers currently find you?",
    options: [
      { label: "Paid Ads / Social", score: 90, category: 'visibility' },
      { label: "Referrals", score: 60, category: 'visibility' },
      { label: "Walk-ins", score: 40, category: 'visibility' },
      { label: "I am not sure", score: 10, category: 'visibility' }
    ]
  },
  {
    id: 5,
    question: "Do you have a system for following up with leads?",
    options: [
      { label: "Yes, automated", score: 100, category: 'leads' },
      { label: "Yes, manual", score: 60, category: 'leads' },
      { label: "No", score: 0, category: 'leads' }
    ]
  },
  {
    id: 6,
    question: "How would you rate your branding?",
    options: [
      { label: "Excellent", score: 95, category: 'branding' },
      { label: "Average", score: 50, category: 'branding' },
      { label: "Poor", score: 10, category: 'branding' }
    ]
  }
];
