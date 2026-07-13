import type { PageData } from "./types";

const classes: PageData = {
  title: "教室案内",
  description: "教室とコースの一覧ページ。",
  heroTitle: "教室案内",
  heroIntro: "各教室のご案内と受講コースのご紹介。",
  cards: [
    { title: "講師紹介", href: "/classes/instructors" },
    { title: "新中野教室", href: "/classes/shin-nakano" },
    { title: "銀座教室", href: "/classes/ginza" },
    { title: "北千住上級者向け特別師範教室", href: "/classes/kitasenju-advanced" },
    { title: "通信教育コース", href: "/classes/correspondence" },
    { title: "特別講座", href: "/classes/special-lectures" }
  ]
};

export default classes;
