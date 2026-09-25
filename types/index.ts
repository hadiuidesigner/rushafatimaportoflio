export type VideoCategory = 'commercial' | 'short' | 'cinematic' | 'product' | 'ugc';

export interface VideoItem {
  id: string;
  youtubeId: string;
  youtubeUrl: string;
  title: string;
  category: VideoCategory;
  categoryLabel: string;
  aspectRatio: '9:16' | '16:9';
  isShort: boolean;
  duration: string;
  tools: string[];
  description: string;
  clientNiche: string;
  keyFeature: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  turnaround: string;
  highlightMetric: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  brand: string;
  metric: string;
}

export interface ToolItem {
  name: string;
  category: string;
  description: string;
}
