/**
 * Paste this into a Google Apps Script project (script.google.com)
 * logged in as the Workspace user for info@urondo.com.
 *
 * Deploy → New deployment → Web app
 *   Execute as: Me
 *   Who has access: Anyone
 *
 * Then set PUBLIC_CONTACT_FORM_URL and PUBLIC_CONTACT_FORM_TOKEN in the site .env
 * to match this deployment URL and SHARED_SECRET.
 */

const TO_EMAIL = "info@urondo.com";
const FROM_NAME = "株式会社烏龍堂";
/** Must match PUBLIC_CONTACT_FORM_TOKEN on the website. */
const SHARED_SECRET = "PASTE_SAME_VALUE_AS_PUBLIC_CONTACT_FORM_TOKEN";

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function doPost(e) {
  try {
    const raw = (e && e.postData && e.postData.contents) || "";
    const data = JSON.parse(raw || "{}");

    // Honeypot: pretend success so bots do not retry.
    if (data._gotcha) {
      return jsonResponse_({ ok: true });
    }

    if (!data.token || data.token !== SHARED_SECRET) {
      return jsonResponse_({ ok: false, error: "unauthorized" });
    }

    const name = String(data["お名前"] || "").trim();
    const address = String(data["ご住所"] || "").trim();
    const email = String(data.email || "").trim();
    const phone = String(data["お電話番号"] || "").trim();
    const note = String(data["備考"] || "").trim();

    if (!name || !address || !email || !phone || !note) {
      return jsonResponse_({ ok: false, error: "missing_fields" });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse_({ ok: false, error: "invalid_email" });
    }

    const subject = `お問い合わせ - ${FROM_NAME}`;
    const body = [
      `お名前: ${name}`,
      `ご住所: ${address}`,
      `メールアドレス: ${email}`,
      `お電話番号: ${phone}`,
      "",
      "備考:",
      note,
    ].join("\n");

    GmailApp.sendEmail(TO_EMAIL, subject, body, {
      replyTo: email,
      name: FROM_NAME,
    });

    return jsonResponse_({ ok: true });
  } catch (err) {
    return jsonResponse_({
      ok: false,
      error: "server_error",
      message: String(err && err.message ? err.message : err),
    });
  }
}

/** Optional health check when opening the Web App URL in a browser. */
function doGet() {
  return jsonResponse_({ ok: true, service: "urondo-contact" });
}
