# Sanity + Vercel + on-site admin (お知らせ)

Customers edit news at **`/admin`** on the website (simple Japanese UI + password). Sanity stores the content; Vercel rebuilds after saves.

## 1. Sanity project + env (content store)

```bash
cd sanity
npm install
npx sanity login
```

Root `.env`:

```bash
SANITY_PROJECT_ID=yourProjectId
SANITY_DATASET=production
SANITY_API_VERSION=2025-01-01
```

Also set the same three on **Vercel → Environment Variables**.

### Write token (required for /admin)

1. [sanity.io/manage](https://www.sanity.io/manage) → project → **API** → **Tokens**
2. Add token with **Editor** permission
3. Set `SANITY_TOKEN=...` in root `.env` and Vercel (never expose as `PUBLIC_`)

Seed optional initial data:

```bash
cd sanity
npm run seed
```

Sanity Studio (`npm run sanity:dev` / `npx sanity deploy`) is optional — useful for developers, not needed for the customer.

## 2. Admin login env

In root `.env` and Vercel:

```bash
ADMIN_PASSWORD=choose-a-password-for-the-customer
ADMIN_SESSION_SECRET=long-random-string
```

Generate a secret with: `openssl rand -hex 32`

## 3. Redeploy after edits

Admin API calls the Deploy Hook after create/update/delete.

1. Vercel → **Settings** → **Git** → **Deploy Hooks**
2. Create hook for `main` (name e.g. `admin-news-publish`)
3. Set in `.env` and Vercel:

```bash
VERCEL_DEPLOY_HOOK_URL=https://api.vercel.com/v1/integrations/deploy/...
```

(Sanity webhooks are optional if you only use `/admin`.)

## 4. Customer workflow

1. Open `https://your-domain/admin`
2. Enter the shared password
3. Add / edit / delete お知らせ → **保存する**
4. Wait a few minutes for the Vercel rebuild

Guide (JP): [`src/content/NEWS_EDIT.md`](../src/content/NEWS_EDIT.md)

## 5. Local test

```bash
npm run dev
# open http://localhost:4321/admin
```

## Checklist

- [ ] `SANITY_PROJECT_ID` / dataset / API version on Vercel
- [ ] `SANITY_TOKEN` (Editor) on Vercel
- [ ] `ADMIN_PASSWORD` + `ADMIN_SESSION_SECRET` on Vercel
- [ ] `VERCEL_DEPLOY_HOOK_URL` on Vercel
- [ ] Login at `/admin`, save a test item, confirm a new deployment
