import type { PageData } from "./types";

const downloads: PageData = {
  title: "申込書ダウンロード",
  description: "既存の申込書ダウンロードページ。",
  heroTitle: "申込書ダウンロード",
  heroIntro: "お客様からご提供いただいた遠隔治療申込書をダウンロードできます。",
  downloads: [
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
