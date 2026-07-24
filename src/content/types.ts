export type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

export type SectionGroup = {
  title: string;
  bullets: string[];
};

export type Section = {
  title?: string;
  paragraphs?: string[];
  bullets?: string[];
  groups?: SectionGroup[];
};

export type PriceItem = {
  label: string;
  value: string;
  note?: string;
};

export type ScheduleItem = {
  label: string;
  value: string;
};

export type CardItem = {
  title: string;
  body?: string;
  href?: string;
};

export type DownloadItem = {
  label: string;
  href: string;
  description?: string;
};

export type LocationItem = {
  name: string;
  subtitle?: string;
  address: string;
  access?: string[];
  image?: string;
  alt?: string;
  href?: string;
};

export type PageData = {
  title: string;
  description: string;
  heroTitle: string;
  heroIntro?: string;
  sections?: Section[];
  cards?: CardItem[];
  pricing?: PriceItem[];
  schedule?: ScheduleItem[];
  locations?: LocationItem[];
  downloads?: DownloadItem[];
};
