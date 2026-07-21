import type { NavItem } from "./types";

export const site = {
  name: "株式会社烏龍堂",
  siteUrl: "https://example.com",
  phone: "03-6382-5813",
  email: "urondo@gmail.com",
  address: "〒164-0011 東京都中野区中央4-1-3 ボニータ新中野ビル4F"
};

export const mainNav: NavItem[] = [
  { label: "ホーム", href: "/" },
  { label: "梁蔭全と梁気功", href: "/about" },
  { label: "施術案内", href: "/treatments" },
  { label: "健康気功教室", href: "/classes" },
  { label: "関連販売物", href: "/related-products" },
  { label: "アクセス", href: "/access" },
  { label: "お問い合わせ", href: "/contact" }

];

export const footerNav: NavItem[] = [
  { label: "会社概要", href: "/company" },
  { label: "申込書ダウンロード", href: "/downloads/remote-treatment-application" },
  { label: "秘伝呪符", href: "/special-items" },
  { label: "プライバシーポリシー", href: "/privacy-policy" }
];
