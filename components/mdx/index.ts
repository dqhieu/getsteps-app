import type { MDXComponents } from "mdx/types";
import { TLDR } from "./tldr";
import { FAQ } from "./faq";
import { HowTo } from "./how-to";
import { ComparisonTable } from "./comparison-table";
import { StatCallout } from "./stat-callout";
import { ExpertQuote } from "./expert-quote";
import { RouteCard } from "./route-card";

export { TLDR, FAQ, HowTo, ComparisonTable, StatCallout, ExpertQuote, RouteCard };
export type { FAQItem } from "./faq";
export type { HowToStep } from "./how-to";
export type { ComparisonColumn, ComparisonRow } from "./comparison-table";

export const mdxComponents: MDXComponents = {
  TLDR,
  FAQ,
  HowTo,
  ComparisonTable,
  StatCallout,
  ExpertQuote,
  RouteCard,
};
