import type { APIRoute } from "astro";
import { isAuthenticated } from "../../../../lib/admin-auth";
import { triggerDeployHook } from "../../../../lib/deploy-hook";
import { getSanityWriteClient } from "../../../../lib/sanity";

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

export const PATCH: APIRoute = async ({ params, request }) => {
  if (!(await isAuthenticated(request))) {
    return unauthorized();
  }

  const id = params.id;
  if (!id) {
    return new Response(JSON.stringify({ error: "ID がありません。" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
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
    let patch = client.patch(id).set({ date, title });
    patch = href ? patch.set({ href }) : patch.unset(["href"]);
    const item = await patch.commit();

    await triggerDeployHook();

    return new Response(JSON.stringify({ item }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("[admin/news PATCH]", error);
    return sanityWriteMissing();
  }
};

export const DELETE: APIRoute = async ({ params, request }) => {
  if (!(await isAuthenticated(request))) {
    return unauthorized();
  }

  const id = params.id;
  if (!id) {
    return new Response(JSON.stringify({ error: "ID がありません。" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  const client = getSanityWriteClient();
  if (!client) {
    return sanityWriteMissing();
  }

  try {
    await client.delete(id);
    await triggerDeployHook();

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("[admin/news DELETE]", error);
    return sanityWriteMissing();
  }
};
