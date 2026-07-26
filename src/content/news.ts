export type NewsItem = {
  date: string;
  title: string;
  href?: string;
};

// お知らせはこの配列を書き換えるだけで更新できます。
// `href` を入れるとクリック可能、不要なら消してOKです。
export const newsItems: NewsItem[] = [
  {
    date: "2026/7/24",
    title: "2026年秘伝呪符申込受付開始の知らせ",
    href: "/downloads"
  },
  // {
  //   date: "2026/8/10",
  //   title: "お盆先祖大供養会"
  // },
  // {
  //   date: "2026/8/24",
  //   title: "黄庭不死法印之生命力空間の講座年間内容のご案内"
  // },
  // {
  //   date: "2026/9/1",
  //   title: "2026年秋期教室開講案内",
  //   href: "/classes"
  // }
];
