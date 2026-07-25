import type { PageData } from "./types";

const downloads: PageData = {
  title: "申込書ダウード",
  description: "既存の申込書ダウンロードページ。",
  heroTitle: "申込書ダウンロード",
  heroIntro: "各種申込書とオンライン入力ページをご利用いただけます。",
  downloads: [
    {
      label: "秘伝呪符申込書\n（PDF）",
      href: "/downloads/秘伝呪符申込書.pdf"
    },
    {
      label: "秘伝呪符申込書\n（Excel）",
      href: "/downloads/秘伝呪符申込書.xlsx"
    },
    {
      label: "遠隔念力気功申込書\n（PDF）",
      href: "/downloads/遠隔治療申込書.pdf",
      description: "印刷してご利用いただく方向けのPDF版です。"
    },
    {
      label: "遠隔念力気功申込書\n（Excel）",
      href: "/downloads/遠隔治療申込書.xlsx",
      description: "入力してご利用いただく方向けのExcel版です。"
    }
  ]
};

export default downloads;
