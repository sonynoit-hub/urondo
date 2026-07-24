import type { PageData } from "./types";

const classes: PageData = {
  heroTitle: "健康気功教室",
  title: "教室案内",
  description: "教室とコースの一覧ページ。",
  heroIntro: "通学の教室は、新中野・銀座・北千住の３拠点からお選びいただけます。",
  sections: [
    {
      title: "主任講師 梁蔭全先生",
      paragraphs: [
        "全日本気功療術師養成学院主任講師、東京古禅美術館館長、全日本養生協会会長、日本仙道科学研究所所長、日本難病自然回復研究所所長"
      ]
    },
    {
      title: "健康気功教室の参加者に身につけてほしい目標",
      bullets: [
        "① 自分自身が健康長寿になること",
        "② 家族、親族、周囲の方たちの健康回復管理ができること",
        "③ 人を助ける喜びと智恵が増えること",
        "④ プロの気功療術師としてゼロ資金から独立開業が出来ること",
        "⑤ 自分の心が幸せを感じ人に幸せを与えられること",
        "なによりも「幸せな人生」が過ごせる福祉社会を作りあげる手助けができることです。"
      ]
    },
    {
      title: "講師の先生方",
      paragraphs: [
        "梁先生の指導歴１０年以上、銀座万仏宇宙健康会理事",
        "舟田惠里子講師、佐野美佐子講師、綱島礼子講師"
      ]
    }
  ],
  locations: [
    {
      name: "新中野教室",
      subtitle: "梁気功エネルギー空間",
      address: "〒１６４-００１１ 東京都中野区中央４-１-３ ポニータ新中野ビル４F",
      access: [
        "新宿方面からは東京メトロ新中野駅出口４番から出て左方向に徒歩１分ローソン新中野駅前店横から入ってください。",
        "荻窪方面からは、出口３番から出て右方向に向かい、みずほ銀行前の横断歩道を渡って左へ。"
      ],
      image: "/images/source-extracted/access/shin-nakano.jpeg",
      alt: "赤い床と掛け軸が並ぶ新中野教室の内観",
      href: "/classes/shin-nakano"
    },
    {
      name: "銀座教室",
      subtitle: "銀座万仏宇宙エネルギー空間",
      address: "〒１０４-００６１ 東京都中央区銀座２-１１-８ ラウンドクロス銀座２丁目ビル２F",
      access: [
        "東京メトロ有楽町線銀座一丁目駅 １１番出口より徒歩３分",
        "都営浅草線東銀座駅A７、A８出口より徒歩３分"
      ],
      image: "/images/source-extracted/classes-overview/classes-overview-02.jpeg",
      alt: "赤い座布団と仏像が並ぶ銀座教室の内観",
      href: "/classes/ginza"
    },
    {
      name: "北千住教室",
      subtitle: "全日本気功療術師養成学院",
      address: "〒１２１-０８１５ 東京都足立区島根２丁目３２-２１いづみハイツ竹の塚（右側入り口）２F",
      access: [
        "東武伊勢崎線 西新井駅 徒歩１８分",
        "JR北千住駅からバス（北４７）島根町下車、徒歩２分。",
        "東武伊勢崎線 竹ノ塚駅 バス（北４７）島根町下車徒歩２分"
      ],
      image: "/images/source-extracted/classes-overview/classes-overview-03.png",
      alt: "受講者が体を動かしている北千住教室の様子",
      href: "/classes/kitasenju-advanced"
    }
  ],
  cards: [
    { title: "新中野教室", body: "梁気功エネルギー空間", href: "/classes/shin-nakano" },
    { title: "銀座教室", body: "銀座万仏宇宙エネルギー空間", href: "/classes/ginza" },
    { title: "北千住上級者向け特別師範教室", body: "全日本気功療術師養成学院", href: "/classes/kitasenju-advanced" },
    { title: "通信教育コース", body: "大宇宙気功法 通信教育コース", href: "/classes/correspondence" },
    { title: "特別講座", body: "２ヶ月に１回程度開催", href: "/classes/special-lectures" }
  ]
};

export default classes;
