import type { PageData } from "./types";

const classes: PageData = {
  title: "教室案内",
  description: "教室とコースの一覧ページ。",
  heroTitle: "教室案内",
  heroIntro: "株式会社烏龍堂は新中野・銀座・北千住の3教室で展開中です！",
  locations: [
    {
      name: "新中野教室",
      subtitle: "梁気功エネルギー空間",
      address: "〒164-0011東京都中野区中央４－１－３ボニータ新中野ビル４F",
      access: [
        "新宿方面からは東京メトロ新中野駅出口４番から出て左方向に徒歩１分ローソン新中野駅前店横から入ってください。",
        "荻窪方面からは、出口３番から出て右方向に向かい、みずほ銀行前の横断歩道を渡って左へ。"
      ],
      image: "/images/source-extracted/classes-overview/classes-overview-01.jpeg",
      alt: "赤い床に寝具が整えられた新中野教室の内観",
      href: "/classes/shin-nakano"
    },
    {
      name: "銀座教室",
      subtitle: "銀座万仏宇宙エネルギー空間",
      address: "〒104-0061 東京都中央区銀座2－11－8ラウンドクロス銀座2丁目ビル2F",
      access: [
        "東京メトロ有楽町線銀座一丁目駅 11番出口より徒歩3分",
        "都営浅草線東銀座駅A7,A8出口より徒歩3分"
      ],
      image: "/images/source-extracted/classes-overview/classes-overview-02.jpeg",
      alt: "赤い座布団と仏像が並ぶ銀座教室の内観",
      href: "/classes/ginza"
    },
    {
      name: "北千住教室",
      subtitle: "全日本気功療術師養成学院",
      address: "〒121-0815東京都足立区島根2丁目32-21いづみハイツ竹の塚（右側入り口）2F",
      access: [
        "東武伊勢崎線 西新井駅 徒歩18分",
        "JR北千住駅からバス（北47）島根町下車、徒歩2分。",
        "東武伊勢崎線 竹ノ塚駅 バス（北47）島根町下車徒歩2分"
      ],
      image: "/images/source-extracted/classes-overview/classes-overview-03.png",
      alt: "受講者が体を動かしている北千住教室の様子",
      href: "/classes/kitasenju-advanced"
    }
  ],
  cards: [
    { title: "講師紹介", body: "主任講師・講師の先生方", href: "/classes/instructors" },
    { title: "新中野教室", body: "梁気功エネルギー空間", href: "/classes/shin-nakano" },
    { title: "銀座教室", body: "銀座万仏宇宙エネルギー空間", href: "/classes/ginza" },
    { title: "北千住上級者向け特別師範教室", body: "全日本気功療術師養成学院", href: "/classes/kitasenju-advanced" },
    { title: "通信教育コース", body: "大宇宙気功法 通信教育コース", href: "/classes/correspondence" },
    { title: "特別講座", body: "2ヶ月に1回程度開催", href: "/classes/special-lectures" }
  ]
};

export default classes;
