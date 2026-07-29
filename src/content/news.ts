import { getSanityClient, isSanityConfigured, type SanityNewsDoc } from "../lib/sanity";
import { newsQuery } from "../lib/news-query";

export type NewsItem = {
  date: string;
  title: string;
  href?: string;
};

/** Used when Sanity env is missing (local/dev) or the fetch fails. */
export const fallbackNewsItems: NewsItem[] = [
  {
    date: "2026/7/24",
    title: "2026年秘伝呪符申込受付開始の知らせ",
    href: "/downloads"
  }
];

function formatDisplayDate(isoDate: string): string {
  // Sanity date fields are YYYY-MM-DD; site UI uses YYYY/M/D.
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  if (!match) {
    return isoDate.replaceAll("-", "/");
  }

  const year = match[1];
  const month = String(Number(match[2]));
  const day = String(Number(match[3]));
  return `${year}/${month}/${day}`;
}

function mapNewsDoc(doc: SanityNewsDoc): NewsItem {
  const item: NewsItem = {
    date: formatDisplayDate(doc.date),
    title: doc.title
  };

  const href = doc.href?.trim();
  if (href) {
    item.href = href;
  }

  return item;
}

export async function fetchNewsItems(): Promise<NewsItem[]> {
  if (!isSanityConfigured()) {
    return fallbackNewsItems;
  }

  const client = getSanityClient();
  if (!client) {
    return fallbackNewsItems;
  }

  try {
    const docs = await client.fetch<SanityNewsDoc[]>(newsQuery);
    if (!Array.isArray(docs)) {
      return fallbackNewsItems;
    }
    return docs.map(mapNewsDoc);
  } catch (error) {
    console.warn("[news] Sanity fetch failed; using fallback news items.", error);
    return fallbackNewsItems;
  }
}

export const newsItems: NewsItem[] = await fetchNewsItems();
