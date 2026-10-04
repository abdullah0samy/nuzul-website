export type Locale = 'ar' | 'en';

export type Currency = 'EGP' | 'USD' | 'SAR' | 'AED' | 'EUR';

export interface ServiceItem {
  id: number;
  title_en: string;
  title_ar: string;
  description_en: string;
  description_ar: string;
  icon: string;
  category_key: 'software' | 'servers' | 'infrastructure';
  category_en: string;
  category_ar: string;
  useCaseStory_ar: string;
  useCaseStory_en: string;
  features_ar: string[];
  features_en: string[];
}

export interface EnterprisePackage {
  id: 'starter' | 'business' | 'professional' | 'enterprise';
  name_en: string;
  name_ar: string;
  subtitle_en: string;
  subtitle_ar: string;
  badge_en?: string | null;
  badge_ar?: string | null;
  price_setup_egp: string;
  price_monthly_egp: string;
  price_setup_usd: string;
  price_monthly_usd: string;
  highlighted: boolean;
  summary_en: string[];
  summary_ar: string[];
  details_en: string[];
  details_ar: string[];
}

export interface HostingPlan {
  id: string;
  key: 'shared' | 'wordpress' | 'vps' | 'windows';
  nameAr: string;
  nameEn: string;
  basePriceEGP: number;
  basePriceUSD: number;
  specsAr: string[];
  specsEn: string[];
  popular?: boolean;
}

export interface CaseStudy {
  id: number;
  title_en: string;
  title_ar: string;
  category_en: string;
  category_ar: string;
  client_en: string;
  client_ar: string;
  description_en: string;
  description_ar: string;
  tech: string[];
  result_en: string;
  result_ar: string;
  icon: string;
  badge?: string;
  executiveSummary_ar?: string;
  executiveSummary_en?: string;
  deliverables_ar?: string[];
  deliverables_en?: string[];
  challenges_ar?: string[];
  challenges_en?: string[];
  solution_ar?: string[];
  solution_en?: string[];
}

export interface Testimonial {
  name_en: string;
  name_ar: string;
  role_en: string;
  role_ar: string;
  text_en: string;
  text_ar: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  slug: string;
  title_en: string;
  title_ar: string;
  date: string;
  category_en: string;
  category_ar: string;
  excerpt_en: string;
  excerpt_ar: string;
  content_en: string;
  content_ar: string;
}

export interface CartItem {
  id: string;
  planId: string;
  planName: string;
  baseMonthlyEGP: number;
  baseMonthlyUSD: number;
  months: 1 | 12 | 24 | 36;
  serverLocation: 'cairo' | 'us' | 'eu';
  domainName?: string;
}
