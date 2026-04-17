export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  featured: boolean;
  year: number;
  client?: string;
  location: string;
  stack: string[];
  surfaces: string[];
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  results: string;
  color: string;
  icon: string;
  liveUrl?: string;
}

export interface ServiceTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
  badge?: string;
}
