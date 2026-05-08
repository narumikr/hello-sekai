"use client";

import { XoMikuDialog, XxMikuDialog } from "@naru/untitled-ui-library";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
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
  dialog: Awaited<ReturnType<typeof getDictionary>>["profile-page"]["dialog"];
}

const XXMIKU_DIALOG = 1;
const XOMIKU_DIALOG = 2;

export const Profile = ({ apps, dialog }: ProfileProps) => {
  const [openDialogId, setOpenDialogId] = useState<ApplicationId | null>(null);
  const [idxDialog, setIdxDialog] = useState(XXMIKU_DIALOG);

  const createAppItem = (id: ApplicationId): AppGridLayoutItem => {
    const appInfo = applicationInfo[id];
    const label = apps[id]?.label ?? id;
    const onClick = () => {
      if ("link" in appInfo) {
        window.open(appInfo.link, "_blank", "noopener,noreferrer");
      } else {
        setOpenDialogId(id);
      }

      setIdxDialog(Math.random() < 0.5 ? XXMIKU_DIALOG : XOMIKU_DIALOG);
    };

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

  const button = [
    {
      text: dialog.close ?? "閉じる",
      onClick: () => setOpenDialogId(null),
      ariaLabel: dialog.close ?? "閉じる",
    },
  ];

  const dialogContent = ({ id }: { id: ApplicationId | null }) => {
    if (id === null) return null;
    const content =
      "note" in applicationInfo[id]
        ? (applicationInfo[id].note as readonly string[])
        : [];
    return (
      <div>
        {content.map((note) => (
          <p key={`${id}-${note}`}>{parse(DOMPurify.sanitize(String(note)))}</p>
        ))}
      </div>
    );
  };

  return (
    <>
      <AppGridLayout items={items} />
      <XxMikuDialog
        open={Boolean(openDialogId) && idxDialog === XXMIKU_DIALOG}
        title={openDialogId ? apps[openDialogId]?.label : ""}
        onClose={() => setOpenDialogId(null)}
        buttons={button}
      >
        {dialogContent({ id: openDialogId })}
      </XxMikuDialog>
      <XoMikuDialog
        open={Boolean(openDialogId) && idxDialog === XOMIKU_DIALOG}
        title={openDialogId ? apps[openDialogId]?.label : ""}
        onClose={() => setOpenDialogId(null)}
        buttons={button}
      >
        {dialogContent({ id: openDialogId })}
      </XoMikuDialog>
    </>
  );
};
