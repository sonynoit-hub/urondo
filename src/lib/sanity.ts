import { createClient, type SanityClient } from "@sanity/client";

export type SanityNewsDoc = {
  _id: string;
  date: string;
  title: string;
  href?: string | null;
};

const projectId = import.meta.env.SANITY_PROJECT_ID as string | undefined;
const dataset = (import.meta.env.SANITY_DATASET as string | undefined) || "production";
const apiVersion = (import.meta.env.SANITY_API_VERSION as string | undefined) || "2025-01-01";
const token = import.meta.env.SANITY_TOKEN as string | undefined;

export function isSanityConfigured(): boolean {
  return Boolean(projectId && projectId !== "yourProjectId");
}

export function getSanityClient(): SanityClient | null {
  if (!isSanityConfigured()) {
    return null;
  }

  // Public reads: do not attach a write token (invalid tokens break CDN reads).
  return createClient({
    projectId: projectId!,
    dataset,
    apiVersion,
    useCdn: true,
    perspective: "published"
  });
}

/** Write client for admin mutations. Requires SANITY_TOKEN with Editor access. */
export function getSanityWriteClient(): SanityClient | null {
  if (!isSanityConfigured() || !token) {
    return null;
  }

  return createClient({
    projectId: projectId!,
    dataset,
    apiVersion,
    useCdn: false,
    token,
    perspective: "published"
  });
}
