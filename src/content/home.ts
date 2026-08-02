import type { CardItem, PageData } from "./types";

type PhilosophyContent = {
  title: string;
  statement: string;
  promises: string[];
  paragraphs: string[];
};

type FeatureContent = {
  title: string;
  intro: string;
  featureTitle: string;
  featureParagraphs: string[];
};

type PracticeItem = {
  title: string;
  body: string;
};

interface HomePageData extends PageData {
  heroLines: string[];
  philosophy: PhilosophyContent;
  treatment: FeatureContent;
  treatmentStyles: CardItem[];
  classroom: FeatureContent;
  classroomPractices: PracticeItem[];
}

const home: HomePageData = {
  title: "ホーム",
  description: "株式会社烏龍堂の超実感気功療法と健康気功教室をご案内します。",
  heroTitle: "健康を、もっと自由に。長寿を、もっと喜びに。幸せを、もっと日常に。",
  heroLines: [
    "健康を、もっと自由に。",
    "長寿を、もっと喜びに。",
    "幸せを、もっと日常に。"
  ],
  heroIntro: "あなたの生命パワーを呼び覚ます、自身の体質超強化改造",
  philosophy: {
    title: "私たちの理念",
    statement: "東方の生命智慧で、健康・長寿・幸福が調和する社会を創る。",
    promises: [
      "お茶のように、深く温かく、人を癒す存在であること。",
      "龍が象徴する「見えざる気」の力で、人々の生命力を覚醒させること。"
    ],
    paragraphs: [
      "「烏龍堂」の名には、二つの誓いがあります。",
      "私たちは、オーダーメイドの気功施術と健康教室を通じて、一人ひとりが自らの自然治癒力に気づき、生涯にわたって心身ともに輝き続けることをサポートします。",
      "健康があってこそ、長寿は喜びとなり、長寿があってこそ、幸福は深まります。",
      "株式会社烏龍堂は、「健康・長寿・幸福社会」の実現に向け、今日も“気”の力で未来を耕し続けます。"
    ]
  },
  treatment: {
    title: "超実感気功療法",
    intro:
      "39年の実績から体系化した『超実感気功療法』による施術で、生命エネルギー『気』にアプローチし、皆様が本来持つ自然治癒力を最大限に引き出すお手伝いをいたします。",
    featureTitle: "施術の特長",
    featureParagraphs: [
      "西洋医学では「異常なし」と言われながらも、慢性的な疲労、不眠、冷え、肩こり、頭痛、めまい、胃腸障害など、はっきりとした原因がつかめない不調に悩む方は少なくありません。こうした不定愁訴はもちろん、難病指定されている疾患の症状緩和に至るまで、幅広く対応します。梁先生による施術は、まず全身の「気」の流れを独自の診断法で見極めることから始まります。滞っている箇所、不足している箇所を見極めた上で、先生の強力な「外気」を必要な経穴（ツボ）や経絡に送り込み、滞りを取り除き、生命エネルギーの流れを正常化していきます。"
    ]
  },
  treatmentStyles: [
    {
      title: "対面施術",
      body:
        "新中野と銀座の事務所で梁先生が直接外気を発し、身体の不調にアプローチします。施術中、身体が温かくなる、痛みが和らぐなどの「超実感」を得られるのが特長です。",
      href: "/treatments/in-person"
    },
    {
      title: "遠隔気功療法",
      body:
        "時間と場所を問わず、梁先生が思念を通じて気を送ります。ニューヨーク在住の方の検査数値が正常範囲に戻った事例をはじめ、国内外で多数の実績があります。",
      href: "/treatments/remote"
    },
    {
      title: "個別指導",
      body:
        "梁先生による希望者個人に対する気功施術、リャン気功指導、健康計画作成を行います。",
      href: "/treatments/private-instruction"
    },
    {
      title: "特別遠隔施術",
      body:
        "お正月や端午の節句、重陽の節句など、体調を崩しやすい季節の変わり目を中心に、決まった日時に希望者の皆さんに梁先生が一斉遠隔施術を実施します。",
      href: "/treatments/special-remote"
    }
  ],
  classroom: {
    title: "健康気功教室",
    intro:
      "病気になってから治すのではなく、そもそも病気にならない心身をつくる——それが東方養生思想の根幹です。私たちの気功教室は、この考え方に基づき、梁蔭全主任講師および認定講師の指導のもと、老若男女を問わず、無理なく続けられる健康習慣を身につける場です。",
    featureTitle: "教室の特長",
    featureParagraphs: [
      "当教室は、単なる気功の型や体操を教える場ではありません。梁先生が祖父（道教羅浮派宗主）から受け継いだ秘伝に、仏教・密教の功法を融合させて完成させた「仙道気功養生法」をベースにしています。「深い呼吸」「ゆったりとした動き」「意念（イメージ）の集中」を組み合わせることで、心身の緊張を芯から解きほぐし、気血の巡る健やかな身体へと導きます。"
    ]
  },
  classroomPractices: [
    {
      title: "調身",
      body: "ストレッチと簡単な準備功で、凝り固まった身体をゆるめます。"
    },
    {
      title: "調息",
      body: "深くゆったりとした腹式呼吸で、副交感神経を優位にし、心身をリラックス状態へ導きます。"
    },
    {
      title: "調心",
      body: "雑念を手放し、自分の身体の内側に意識を向ける瞑想的な時間を持ちます。"
    },
    {
      title: "発功・気の体感",
      body:
        "梁先生または指導員が発する「気」を直接体感。人によっては温かさ、電流のようなビリビリ感、心地よい風のような感覚などを感じ取ることができます。"
    }
  ]
};

export default home;
