import type { PageData } from "./types";

const downloads: PageData = {
  title: "申込書ダウード",
  description: "既存の申込書ダウンロードページ。",
  heroTitle: "申込書ダウンロード",
  heroIntro: "各種申込書とオンライン入力ページをご利用いただけます。",
  downloads: [
    {
      label: "健康気功教室申込書",
      href: "/downloads/health-qigong-application",
      description: "オンライン入力、ブラウザ保存、テキスト保存、メール作成に対応しています。"
    },
    {
      label: "PDF申込書",
      href: "/downloads/remote-treatment-application.pdf",
      description: "印刷してご利用いただく方向けのPDF版です。"
    },
    {
      label: "Excel申込書",
      href: "/downloads/remote-treatment-application.xlsx",
      description: "入力してご利用いただく方向けのExcel版です。"
    }
  ]
};

export default downloads;
