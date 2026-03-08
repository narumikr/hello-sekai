"use client";

import { useState } from "react";
import { AppIcon } from "@/components/atoms/AppIcon";
import {
  AppGridLayout,
  type AppGridLayoutItem,
} from "@/components/molecules/AppGridLayout";
import type { ApplicationIconItem } from "./application.constant";

interface ProfileGridProps {
  items: ApplicationIconItem[];
}

export const ProfileGrid = ({ items }: ProfileGridProps) => {
  const [openDialogId, setOpenDialogId] = useState<string | null>(null);

  const gridItems: AppGridLayoutItem[] = items.map((item) => {
    if (item.type === "custom") {
      return {
        id: item.id,
        colSpan: item.colSpan,
        rowSpan: item.rowSpan,
        children: item.children,
      };
    }

    const { action, ...rest } = item;
    const onClick =
      action.type === "link"
        ? () => window.open(action.href, "_blank")
        : () => setOpenDialogId(action.dialogId);

    return {
      id: rest.id,
      colSpan: rest.colSpan,
      rowSpan: rest.rowSpan,
      children: (
        <AppIcon iconPath={rest.iconPath} label={rest.label} onClick={onClick} />
      ),
    };
  });

  return (
    <>
      <AppGridLayout items={gridItems} />
      {/* TODO: openDialogId に応じたダイアログを表示 */}
    </>
  );
};
