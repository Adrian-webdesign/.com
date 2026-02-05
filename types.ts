
export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Difference {
  title: string;
  description: string;
  size: 'small' | 'medium' | 'large';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Step {
  title: string;
  description: string;
}
