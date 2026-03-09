"use client";

import { useState } from "react";
import { AppIcon } from "@/components/atoms/AppIcon";
import { MusicPlayerWidget } from "@/components/atoms/MusicPlayerWidget";
import {
  AppGridLayout,
  type AppGridLayoutItem,
} from "@/components/layouts/AppGridLayout";
import type { getDictionary } from "@/get-dictionary";
import {
  type ApplicationId,
  applicationInfo,
} from "./constant/application.constant";
import { myFavoriteSongs } from "./constant/my-favorite-songs.constant";

interface ProfileProps {
  apps: Awaited<ReturnType<typeof getDictionary>>["profile-page"]["apps"];
}

export const Profile = ({ apps }: ProfileProps) => {
  const [openDialogId, setOpenDialogId] = useState<string | null>(null);

  const createAppItem = (id: ApplicationId): AppGridLayoutItem => {
    const appInfo = applicationInfo[id];
    const label = apps[id]?.label ?? id;
    const onClick =
      "link" in appInfo
        ? () => window.open(appInfo.link, "_blank", "noopener,noreferrer")
        : () => setOpenDialogId(id);

    return {
      id,
      children: (
        <AppIcon iconPath={appInfo.iconPath} label={label} onClick={onClick} />
      ),
    };
  };

  const items: AppGridLayoutItem[] = [
    createAppItem("prsk"),
    createAppItem("endfield"),
    createAppItem("arknights"),
    createAppItem("github"),
    createAppItem("x-twitter"),
    createAppItem("instagram"),
    {
      id: "music-widget",
      children: (
        <MusicPlayerWidget
          items={myFavoriteSongs}
          label={apps["music-widget"]?.label ?? "music-widget"}
        />
      ),
      colSpan: 2,
      rowSpan: 2,
    },
    createAppItem("pixiv"),
    createAppItem("tabelog"),
    createAppItem("sauna"),
    createAppItem("youtube"),
    createAppItem("bluesky"),
    createAppItem("memo"),
  ];

  return <AppGridLayout items={items} />;
};
