export const applicationInfo = {
  prsk: {
    iconPath: "/images/icons/prsk.png",
  },
  endfield: {
    iconPath: "/images/icons/endfield.png",
  },
  arknights: {
    iconPath: "/images/icons/arknights.png",
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
  },
  pixiv: {
    iconPath: "/images/icons/pixiv.png",
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
  },
  youtube: {
    iconPath: "/images/icons/youtube.png",
  },
} as const;

export type ApplicationId = keyof typeof applicationInfo;
