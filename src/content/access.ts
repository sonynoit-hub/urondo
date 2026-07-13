import type { PageData } from "./types";

const access: PageData = {
  title: "アクセス",
  description: "各教室の所在地とアクセス情報。",
  heroTitle: "アクセス",
  heroIntro: "各教室の所在地をご案内します。",
  locations: [
    { name: "新中野教室", address: "〒164-0011 東京都中野区中央4-1-3 ボニータ新中野ビル4F" },
    { name: "銀座教室", address: "〒104-0061 東京都中央区銀座2-11-8 ラウンドクロス銀座2丁目ビル2F" },
    { name: "北千住教室", address: "〒121-0815 東京都足立区島根2-32-21 いづみハイツ竹の塚2F" }
  ]
};

export default access;
