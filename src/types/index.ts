export type ProjectCategory = 'all' | 'esports' | 'publisher' | 'campus' | 'brand';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  date: string;
  description: string;
  fullDossier: string[];
  imageUrl: string;
  secondaryImageUrl?: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  isFeatured?: boolean;
  isCreatorProject?: boolean;
  youtubeVideoId?: string;
}

export interface Capability {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  tags: string[];
  accentColor?: string;
}

export interface Milestone {
  number: string;
  date: string;
  title: string;
  category: string;
  description: string;
  venue?: string;
}

export interface InquiryFormData {
  fullName: string;
  company: string;
  workEmail: string;
  phone: string;
  projectType: string;
  timeline: string;
  targetRegion: string;
  budgetTier: string;
  projectOverview: string;
}
