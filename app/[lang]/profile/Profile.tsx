"use client";

import { useState } from "react";
import { AppIcon } from "@/components/atoms/AppIcon";
import { MusicPlayerWidget } from "@/components/atoms/MusicPlayerWidget";
import {
  AppGridLayout,
  type AppGridLayoutItem,
} from "@/components/layouts/AppGridLayout";
import type { getDictionary } from "@/get-dictionary";
import type { ApplicationId } from "./constant/application.constant";
import { applicationInfo } from "./constant/application.constant";
import { myFavoriteSongs } from "./constant/my-favorite-songs.constant";

interface ProfileProps {
  apps: Awaited<ReturnType<typeof getDictionary>>["profile-page"]["apps"];
}

export const Profile = ({ apps }: ProfileProps) => {
  const [openDialogId, setOpenDialogId] = useState<string | null>(null);

  const items: AppGridLayoutItem[] = [
    {
      id: "prsk",
      children: (
        <ViewDialogApp id="prsk" labelInfo={apps} onClick={setOpenDialogId} />
      ),
    },
    {
      id: "endfield",
      children: (
        <ViewDialogApp
          id="endfield"
          labelInfo={apps}
          onClick={setOpenDialogId}
        />
      ),
    },
    {
      id: "arknights",
      children: (
        <ViewDialogApp
          id="arknights"
          labelInfo={apps}
          onClick={setOpenDialogId}
        />
      ),
    },
    {
      id: "github",
      children: <LinkApp id="github" labelInfo={apps} />,
    },
    {
      id: "x-twitter",
      children: <LinkApp id="x-twitter" labelInfo={apps} />,
    },
    {
      id: "instagram",
      children: <LinkApp id="instagram" labelInfo={apps} />,
    },
    {
      id: "music-widget",
      children: (
        <MusicPlayerWidget
          items={myFavoriteSongs}
          label={apps["music-widget"]?.label || "Music"}
        />
      ),
      colSpan: 2,
      rowSpan: 2,
    },
    {
      id: "pixiv",
      children: (
        <ViewDialogApp id="pixiv" labelInfo={apps} onClick={setOpenDialogId} />
      ),
    },
    {
      id: "tabelog",
      children: <LinkApp id="tabelog" labelInfo={apps} />,
    },
    {
      id: "sauna",
      children: (
        <ViewDialogApp id="sauna" labelInfo={apps} onClick={setOpenDialogId} />
      ),
    },
    {
      id: "youtube",
      children: (
        <ViewDialogApp
          id="youtube"
          labelInfo={apps}
          onClick={setOpenDialogId}
        />
      ),
    },
    {
      id: "bluesky",
      children: <LinkApp id="bluesky" labelInfo={apps} />,
    },
    {
      id: "memo",
      children: (
        <ViewDialogApp id="memo" labelInfo={apps} onClick={setOpenDialogId} />
      ),
    },
  ];

  return <AppGridLayout items={items} />;
};

// =========== プロフィール UI 表示のコンテンツコンポーネント ===========
interface ViewDialogAppProps {
  id: ApplicationId;
  labelInfo: Awaited<ReturnType<typeof getDictionary>>["profile-page"]["apps"];
  onClick: (id: ApplicationId) => void;
}

const ViewDialogApp = ({ id, labelInfo, onClick }: ViewDialogAppProps) => {
  const label = labelInfo[id]?.label || id;

  return (
    <AppIcon
      iconPath={applicationInfo[id].iconPath}
      label={label}
      onClick={() => onClick?.(id)}
    />
  );
};

interface LinkAppProps {
  id: ApplicationId;
  labelInfo: Awaited<ReturnType<typeof getDictionary>>["profile-page"]["apps"];
}

const LinkApp = ({ id, labelInfo }: LinkAppProps) => {
  const label = labelInfo[id]?.label || id;
  const appInfo = applicationInfo[id];

  const handleClick = () => {
    if ("link" in appInfo) {
      window.open(appInfo.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <AppIcon iconPath={appInfo.iconPath} label={label} onClick={handleClick} />
  );
};
