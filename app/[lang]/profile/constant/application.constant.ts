export const applicationInfo = {
  prsk: {
    iconPath: "/images/icons/prsk.png",
    note: [
      "プロセカ大大大好き！！",
      "推しは<strong>いっちゃん</strong>💫<strong>ミク</strong>🎵",
      "人生を変えてくれた救ってくれたセカイのみんな感謝✨",
      "<br>",
      "✖━━━━━━",
      "&nbsp;<strong>Name</strong> : Naru",
      "&nbsp;<strong>ID</strong> : 186056038017015814",
      "━━━━━━✖",
    ],
  },
  endfield: {
    iconPath: "/images/icons/endfield.png",
    note: [
      "管理人とペリカが推し🍎",
      "工業難しすぎ...💦",
      "グラフィック綺麗すぎてびっくりしてる✨",
      "<br>",
      "✖━━━━━",
      "&nbsp;<strong>Name</strong>: Naru",
      "&nbsp;<strong>ID</strong>: 4771269691",
      "━━━━━✖",
    ],
  },
  arknights: {
    iconPath: "/images/icons/arknights.png",
    note: [
      "アーミヤが一番好き🐰",
      "ゲームはまったりエンジョイ🎮",
      "年始のフェスイベは毎年の楽しみ✨",
      "<br>",
      "✖━━━━━",
      "&nbsp;<strong>Name</strong>: Naru#5580",
      "&nbsp;<strong>ID</strong>: 07629871",
      "━━━━━✖",
    ],
  },
  github: {
    iconPath: "/images/icons/github.png",
    link: "https://github.com/narumikr",
  },
  instagram: {
    iconPath: "/images/icons/instagram.png",
    link: "https://www.instagram.com/_narumikr396/",
  },
  "x-twitter": {
    iconPath: "/images/icons/x.png",
    link: "https://x.com/mmhr_cani96",
  },
  sauna: {
    iconPath: "/images/icons/sauna.png",
    note: [
      "サウナの魅力に取りつかれた♨️",
      "週一でどこかのサウナには行っている",
      "金亀はおすすめサウナ！赤坂にあるのでぜひ",
      "北こぶしが今一番行きたい(￣△￣*)",
    ],
  },
  pixiv: {
    iconPath: "/images/icons/pixiv.png",
    note: [
      "三嶋くろね先生のイラストが大好き...癒し✨",
      "くろねっ娘はあんせるが好き(￣△￣*)",
      "<br>",
      "✖━━━━━ 所持作品 ━━━━━✖",
      "&nbsp;白き戦乙女達",
      "&nbsp;LUSH",
      "&nbsp;黒猫のあしあと",
      "&nbsp;8.15HAPPYBALLOON！",
      "&nbsp;旅立ち",
      "&nbsp;アンセリス達の夏休み！",
      "&nbsp;peaceful time",
      "&nbsp;雪の夜",
      "&nbsp;Twin Ace",
      "&nbsp;おはよう",
    ],
  },
  tabelog: {
    iconPath: "/images/icons/tabelog.png",
    link: "https://tabelog.com/rvwr/narunarumireview/",
  },
  bluesky: {
    iconPath: "/images/icons/bluesky.png",
    link: "https://bsky.app/profile/narumikr.bsky.social",
  },
  memo: {
    iconPath: "/images/icons/memo.png",
    note: ["Coming soon..."],
  },
  youtube: {
    iconPath: "/images/icons/youtube.png",
    note: [
      "QuizKnockの動画は全部チェックしてる✨",
      "リドラのクイズも好きで見てる！",
      "積分サークルもおもろい企画多くて好き",
      "アニメ系でいうと、ぼくわたチャンネルも毎日チェックしてる！",
    ],
  },
} as const;

export type ApplicationId = keyof typeof applicationInfo;
