import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "./models";

export async function getLocalizedCollection<
  T extends "publications" | "projects" | "writing" | "awards"
>(collection: T, lang: Lang) {
  const entries = await getCollection(collection);
  return entries.filter((entry) => entry.data.lang === lang);
}

export function byFeaturedThenYear<
  T extends CollectionEntry<"publications"> | CollectionEntry<"awards">
>(a: T, b: T) {
  return Number(b.data.featured) - Number(a.data.featured) || b.data.year - a.data.year;
}

export const statusLabels = {
  zh: {
    published: "已发表",
    accepted: "已录用",
    under_review: "审稿中",
    manuscript: "研究稿件",
    shared_task: "共享任务系统"
  },
  en: {
    published: "Published",
    accepted: "Accepted",
    under_review: "Under Review",
    manuscript: "Manuscript",
    shared_task: "Shared Task System"
  }
} as const;

export function entryHref(
  lang: Lang,
  collection: "research" | "projects" | "writing",
  slug: string
) {
  return `/${lang}/${collection}/${slug}/`;
}
