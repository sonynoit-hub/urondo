import type { PageData } from "./types";

const contact: PageData = {
  title: "お申し込み・お問い合わせ",
  description: "お申し込み・お問い合わせページ。",
  heroTitle: "お申し込み・お問い合わせ",
  heroIntro: "４お申し込みとお問い合わせ.docx の内容を移行するための下書きページです。",
  downloads: [
    { label: "健康気功教室申込書", href: "/downloads/health-qigong-application" },
    { label: "遠隔治療申込書", href: "/downloads/remote-treatment-application" }
  ],
  sections: [{ title: "原稿参照", paragraphs: ["４お申し込みとお問い合わせ.docx の内容をこのページに反映します。"] }]
};

export default contact;
