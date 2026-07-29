const COOKIE_NAME = "urondo_admin_session";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

function getPassword(): string | undefined {
  return import.meta.env.ADMIN_PASSWORD as string | undefined;
}

function getSessionSecret(): string | undefined {
  return import.meta.env.ADMIN_SESSION_SECRET as string | undefined;
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }

  let mismatch = 0;
  for (let i = 0; i < a.length; i += 1) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

async function hmacSign(value: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value));
  return [...new Uint8Array(signature)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export function isAdminAuthConfigured(): boolean {
  return Boolean(getPassword() && getSessionSecret());
}

export function verifyAdminPassword(password: string): boolean {
  const expected = getPassword();
  if (!expected) {
    return false;
  }
  return timingSafeEqual(password, expected);
}

export async function createSessionToken(): Promise<string | null> {
  const secret = getSessionSecret();
  if (!secret) {
    return null;
  }

  const issuedAt = Date.now().toString();
  const signature = await hmacSign(issuedAt, secret);
  return `${issuedAt}.${signature}`;
}

export async function isValidSessionToken(token: string | undefined): Promise<boolean> {
  const secret = getSessionSecret();
  if (!secret || !token) {
    return false;
  }

  const [issuedAt, signature] = token.split(".");
  if (!issuedAt || !signature) {
    return false;
  }

  const issuedMs = Number(issuedAt);
  if (!Number.isFinite(issuedMs)) {
    return false;
  }

  if (Date.now() - issuedMs > MAX_AGE_SECONDS * 1000) {
    return false;
  }

  const expected = await hmacSign(issuedAt, secret);
  return timingSafeEqual(signature, expected);
}

export function getSessionCookieValue(request: Request): string | undefined {
  const cookieHeader = request.headers.get("cookie");
  if (!cookieHeader) {
    return undefined;
  }

  const parts = cookieHeader.split(";").map((part) => part.trim());
  for (const part of parts) {
    const eq = part.indexOf("=");
    if (eq === -1) {
      continue;
    }
    const name = part.slice(0, eq);
    if (name === COOKIE_NAME) {
      return decodeURIComponent(part.slice(eq + 1));
    }
  }
  return undefined;
}

export async function isAuthenticated(request: Request): Promise<boolean> {
  const token = getSessionCookieValue(request);
  return isValidSessionToken(token);
}

export function buildSessionCookie(token: string): string {
  const secure = import.meta.env.PROD ? "; Secure" : "";
  return `${COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${MAX_AGE_SECONDS}${secure}`;
}

export function buildClearSessionCookie(): string {
  const secure = import.meta.env.PROD ? "; Secure" : "";
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${secure}`;
}

export { COOKIE_NAME };
