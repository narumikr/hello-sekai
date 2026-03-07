import type { AppIconItem } from "@/components/molecules/AppIconGrid";

export type IconAction =
  | { type: "link"; href: string }
  | { type: "dialog"; dialogId: string };

export type ApplicationIconItem = Omit<AppIconItem, "onClick"> & {
  action: IconAction;
};

type IconDefinition = Omit<ApplicationIconItem, "label">;

export const applicationIcons: IconDefinition[] = [
  {
    id: "prsk",
    iconPath: "/images/icons/prsk.png",
    action: { type: "dialog", dialogId: "prsk" },
  },
  {
    id: "endfield",
    iconPath: "/images/icons/endfield.png",
    action: { type: "dialog", dialogId: "endfield" },
  },
  {
    id: "arknights",
    iconPath: "/images/icons/arknights.png",
    action: { type: "dialog", dialogId: "arknights" },
  },
  {
    id: "github",
    iconPath: "/images/icons/github.png",
    action: { type: "link", href: "https://github.com/" },
  },
  {
    id: "instagram",
    iconPath: "/images/icons/instagram.png",
    action: { type: "link", href: "https://instagram.com/" },
  },
  {
    id: "x-twitter",
    iconPath: "/images/icons/x.png",
    action: { type: "link", href: "https://x.com/" },
  },
  {
    id: "sauna",
    iconPath: "/images/icons/sauna.png",
    action: { type: "dialog", dialogId: "sauna" },
  },
  {
    id: "pixiv",
    iconPath: "/images/icons/pixiv.png",
    action: { type: "link", href: "https://pixiv.net/" },
  },
  {
    id: "tabelog",
    iconPath: "/images/icons/tabelog.png",
    action: { type: "link", href: "https://tabelog.com/" },
  },
  {
    id: "bluesky",
    iconPath: "/images/icons/bluesky.png",
    action: { type: "link", href: "https://bsky.app/" },
  },
  {
    id: "memo",
    iconPath: "/images/icons/memo.png",
    action: { type: "dialog", dialogId: "memo" },
  },
];
