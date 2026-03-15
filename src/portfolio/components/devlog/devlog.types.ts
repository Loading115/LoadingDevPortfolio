export type DevlogTone = "primary" | "secondary";

export type DevlogUpdateItem = {
  id: string;
  title: string;
  publishedAt: string;
  categoryLabel: string;
  categoryTone?: DevlogTone;
  excerpt: string;
  href: string;
  ctaLabel?: string;
};

export type DevlogVideoItem = {
  id: string;
  title: string;
  publishedAt: string;
  views: string;
  excerpt: string;
  href: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
};

export type DevlogSubscriptionCta = {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
};
