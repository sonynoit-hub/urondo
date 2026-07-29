export async function triggerDeployHook(): Promise<void> {
  const hookUrl = import.meta.env.VERCEL_DEPLOY_HOOK_URL as string | undefined;
  if (!hookUrl) {
    return;
  }

  try {
    const response = await fetch(hookUrl, { method: "POST" });
    if (!response.ok) {
      console.warn("[admin] Deploy hook failed:", response.status, await response.text());
    }
  } catch (error) {
    console.warn("[admin] Deploy hook request error:", error);
  }
}
