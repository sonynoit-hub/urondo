import type { NavItem } from "./types";

export const site = {
  name: "株式会社烏龍堂",
  siteUrl: "https://example.com",
  phone: "03-6382-5813",
  email: "info@urondo.com",
  address: "〒164-0011 東京都中野区中央4-1-3 ボニータ新中野ビル4F"
};

export const mainNav: NavItem[] = [
  { label: "ホーム", href: "/" },
  {
    label: "施術案内",
    href: "/about",
    children: [
      { label: "リャン気功エネルギー", href: "/about" },
      { label: "通院施術", href: "/treatments/in-person" },
      { label: "遠隔念力気功", href: "/treatments/remote" },
      { label: "個別指導", href: "/treatments/private-instruction" },
      { label: "特別遠隔施術", href: "/treatments/special-remote" }
    ]
  },
  {
    label: "健康気功教室",
    href: "/classes",
    children: [
      { label: "講師紹介と講座内容", href: "/classes" },
      { label: "新中野教室", href: "/classes/shin-nakano" },
      { label: "銀座教室", href: "/classes/ginza" },
      { label: "北千住上級者向け特別師範教室", href: "/classes/kitasenju-advanced" },
      { label: "通信教育コース", href: "/classes/correspondence" },
      { label: "特別講座", href: "/classes/special-lectures" }
    ]
  },
  { label: "関連販売物", href: "/related-products" },
  { label: "アクセス", href: "/access" },
  { label: "お問い合わせ", href: "/contact" },
  { label: "お知らせ", href: "/news" }
];

export const footerNav: NavItem[] = [
  { label: "会社概要", href: "/company" },
  { label: "申込書ダウンロード", href: "/downloads" },
  { label: "プライバシーポリシー", href: "/privacy-policy" }
];
