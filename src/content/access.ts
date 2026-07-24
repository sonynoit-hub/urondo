import type { PageData } from "./types";

const access: PageData = {
  title: "アクセス",
  description: "各教室の所在地とアクセス情報。",
  heroTitle: "アクセス",
  heroIntro: "株式会社烏龍堂は新中野・銀座・北千住の3教室で展開中です！",
  locations: [
    {
      name: "新中野教室",
      subtitle: "梁気功エネルギー空間",
      address: "〒164-0011 東京都中野区中央4-1-3 ボニータ新中野ビル4F",
      access: [
        "新宿方面：東京メトロ丸ノ内線 新中野駅4番出口から左へ。徒歩1分、ローソン新中野駅前店横からお入りください。",
        "荻窪方面：3番出口から右へ進み、みずほ銀行前の横断歩道を渡って左へ。"
      ],
      image: "/images/source-extracted/access/shin-nakano.jpeg",
      alt: "新中野教室の梁気功エネルギー空間"
    },
    {
      name: "銀座教室",
      subtitle: "万仏宇宙エネルギー空間",
      address: "〒104-0061 東京都中央区銀座2-11-8 ラウンドクロス銀座2丁目ビル2F",
      access: [
        "東京メトロ有楽町線 銀座一丁目駅 11番出口より徒歩3分",
        "都営浅草線 東銀座駅 A7・A8出口より徒歩3分"
      ],
      image: "/images/source-extracted/access/ginza.jpeg",
      alt: "銀座教室の銀座万仏宇宙エネルギー空間"
    },
    {
      name: "北千住教室",
      address: "〒121-0815 東京都足立区島根2丁目32-21 いづみハイツ竹の塚2F",
      access: [
        "東武伊勢崎線 西新井駅から徒歩18分",
        "JR 北千住駅からバス（北47）島根町下車、徒歩2分",
        "東武伊勢崎線 竹ノ塚駅からバス（北47）島根町下車、徒歩2分"
      ],
      image: "/images/source-extracted/access/kitasenju.png",
      alt: "北千住教室で気功を行う様子"
    }
  ]
};

export default access;
