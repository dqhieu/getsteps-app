import { RelatedLink } from "@/lib/internal-links";

export interface PersonaFeature {
  icon: string;
  title: string;
  description: string;
}

export interface PersonaFAQ {
  question: string;
  answer: string;
}

export interface PersonaTestimonial {
  quote: string;
  author: string;
  context: string;
}

export interface PersonaRelatedLink {
  slug: string;
  title: string;
}

export interface PersonaData {
  slug: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  headline: string;
  subheadline: string;
  ogImage?: string;
  introText: string;
  problemPoints: string[];
  solutionText: string;
  features: PersonaFeature[];
  testimonials: PersonaTestimonial[];
  faqs: PersonaFAQ[];
  relatedTools: RelatedLink[];
  relatedPosts: RelatedLink[];
  relatedPersonas: PersonaRelatedLink[];
  ctaHeadline: string;
  ctaSubtext: string;
}

import { seniorsPersona } from "@/lib/persona-data/seniors";
import { weightLossPersona } from "@/lib/persona-data/weight-loss";
import { beginnersPersona } from "@/lib/persona-data/beginners";
import { kidsPersona } from "@/lib/persona-data/kids";
import { runnersPersona } from "@/lib/persona-data/runners";
import { womenPersona } from "@/lib/persona-data/women";
import { pregnancyPersona } from "@/lib/persona-data/pregnancy";
import { nursesPersona } from "@/lib/persona-data/nurses";
import { officeWorkersPersona } from "@/lib/persona-data/office-workers";
import { heartHealthPersona } from "@/lib/persona-data/heart-health";

const ALL_PERSONAS: PersonaData[] = [
  seniorsPersona,
  weightLossPersona,
  beginnersPersona,
  kidsPersona,
  runnersPersona,
  womenPersona,
  pregnancyPersona,
  nursesPersona,
  officeWorkersPersona,
  heartHealthPersona,
];

export function getAllPersonas(): PersonaData[] {
  return ALL_PERSONAS;
}

export function getPersonaBySlug(slug: string): PersonaData | undefined {
  return ALL_PERSONAS.find((p) => p.slug === slug);
}

export function getAllPersonaSlugs(): string[] {
  return ALL_PERSONAS.map((p) => p.slug);
}
