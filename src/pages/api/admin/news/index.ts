import type { APIRoute } from "astro";
import { isAuthenticated } from "../../../../lib/admin-auth";
import { triggerDeployHook } from "../../../../lib/deploy-hook";
import { newsQuery } from "../../../../lib/news-query";
import {
  getSanityClient,
  getSanityWriteClient,
  type SanityNewsDoc
} from "../../../../lib/sanity";

export const prerender = false;

function unauthorized(): Response {
  return new Response(JSON.stringify({ error: "ログインが必要です。" }), {
    status: 401,
    headers: { "Content-Type": "application/json" }
  });
}

function sanityWriteMissing(): Response {
  return new Response(
    JSON.stringify({
      error:
        "Sanity 書き込みトークンが無効です。sanity.io/manage でこのプロジェクト用の Editor トークンを再発行し、SANITY_TOKEN を設定してください。"
    }),
    {
      status: 503,
      headers: { "Content-Type": "application/json" }
    }
  );
}

function normalizeHref(href: unknown): string | undefined {
  if (typeof href !== "string") {
    return undefined;
  }
  const trimmed = href.trim();
  return trimmed || undefined;
}

function normalizeDate(date: unknown): string | null {
  if (typeof date !== "string") {
    return null;
  }
  const trimmed = date.trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return null;
  }
  return trimmed;
}

export const GET: APIRoute = async ({ request }) => {
  if (!(await isAuthenticated(request))) {
    return unauthorized();
  }

  const client = getSanityClient();
  if (!client) {
    return new Response(JSON.stringify({ error: "Sanity 設定がありません。" }), {
      status: 503,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const items = await client.fetch<SanityNewsDoc[]>(newsQuery);
    return new Response(JSON.stringify({ items: items ?? [] }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("[admin/news GET]", error);
    return new Response(JSON.stringify({ error: "お知らせ一覧の取得に失敗しました。" }), {
      status: 502,
      headers: { "Content-Type": "application/json" }
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  if (!(await isAuthenticated(request))) {
    return unauthorized();
  }

  const client = getSanityWriteClient();
  if (!client) {
    return sanityWriteMissing();
  }

  let body: { date?: string; title?: string; href?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "不正なリクエストです。" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  const date = normalizeDate(body.date);
  const title = typeof body.title === "string" ? body.title.trim() : "";
  const href = normalizeHref(body.href);

  if (!date || !title) {
    return new Response(JSON.stringify({ error: "日付とタイトルは必須です。" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const doc = await client.create({
      _type: "newsItem",
      date,
      title,
      ...(href ? { href } : {})
    });

    await triggerDeployHook();

    return new Response(JSON.stringify({ item: doc }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("[admin/news POST]", error);
    return sanityWriteMissing();
  }
};
