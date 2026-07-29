import type { APIRoute } from "astro";
import {
  buildSessionCookie,
  createSessionToken,
  isAdminAuthConfigured,
  verifyAdminPassword
} from "../../../lib/admin-auth";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  if (!isAdminAuthConfigured()) {
    return new Response(JSON.stringify({ error: "管理ログインが未設定です。" }), {
      status: 503,
      headers: { "Content-Type": "application/json" }
    });
  }

  let body: { password?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "不正なリクエストです。" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  if (!body.password || !verifyAdminPassword(body.password)) {
    return new Response(JSON.stringify({ error: "パスワードが正しくありません。" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }

  const token = await createSessionToken();
  if (!token) {
    return new Response(JSON.stringify({ error: "セッションを作成できませんでした。" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": buildSessionCookie(token)
    }
  });
};
