import type { PageData } from "./types";

const downloads: PageData = {
  title: "申込書ダウード",
  description: "既存の申込書ダウンロードページ。",
  heroTitle: "申込書ダウンロード",
  heroIntro: "各種申込書とオンライン入力ページをご利用いただけます。",
  downloads: [
    {
      label: "健康気功教室申込書",
      href: "/downloads/health-qigong-application.pages"
    },
    {
      label: "秘伝呪符申込書",
      href: "/downloads/hiden-jufu-application.pages"
    },
    {
      label: "遠隔念力気功申込書\n（PDF）",
      href: "/downloads/remote-treatment-application.pdf",
      description: "印刷してご利用いただく方向けのPDF版です。"
    },
    {
      label: "遠隔念力気功申込書\n（Excel）",
      href: "/downloads/remote-treatment-application.xlsx",
      description: "入力してご利用いただく方向けのExcel版です。"
    }
  ]
};

export default downloads;
