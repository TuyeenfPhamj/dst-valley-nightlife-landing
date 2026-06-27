import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  hotline: string;
  email: string;
  address: string;
  website: string;
}

export interface VenueProfile {
  name: string;
  partnerName: string;
  eyebrow: string;
  headline: string;
  subheading: string;
  glassNote: string;
  description: string;
  conceptPoints: string[];
  location: string;
  contact: ContactInfo;
}

export interface GalleryItem {
  title: string;
  caption: string;
  src: string;
  alt: string;
  span?: "wide" | "tall" | "large";
}

export interface ExperienceItem {
  title: string;
  tag: string;
  description: string;
  src: string;
  alt: string;
  icon: LucideIcon;
  tone: "amber" | "teal" | "dark";
}

export interface TimelineItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface EventItem {
  title: string;
  description: string;
  src: string;
  alt: string;
}
