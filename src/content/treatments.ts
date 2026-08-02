import type { PageData } from "./types";

const treatments: PageData = {
  title: "施術案内",
  description: "施術内容の一覧ページ。",
  heroTitle: "施術案内",
  heroIntro: "通院施術、遠隔念力施術、個別指導、特別遠隔施術のご案内。",
  cards: [
    {
      title: "通院施術",
      body: "新中野と銀座の施術室にて、梁蔭全先生が気功施術を行います。",
      href: "/treatments/in-person"
    },
    {
      title: "遠隔念力施術",
      body: "遠方や病状で通院が難しい方に、遠隔念力気功療法で対応します。",
      href: "/treatments/remote"
    },
    {
      title: "個別指導",
      body: "梁蔭全先生による希望者への気功施術、リャン気功指導、健康計画作成。",
      href: "/treatments/private-instruction"
    },
    {
      title: "特別遠隔施術",
      body: "お正月や端午の節句、重陽の節句など、体調を崩しやすい季節の変わり目を中心に、決まった日時に希望者の皆さんに梁蔭全先生が一斉遠隔施術を実施します。",
      href: "/treatments/special-remote"
    }
  ]
};

export default treatments;
