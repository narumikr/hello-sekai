"use client";

import { useState } from "react";
import { AppIconGrid } from "@/components/molecules/AppIconGrid";
import type { ApplicationIconItem } from "./application.constant";

interface ProfileGridProps {
  items: ApplicationIconItem[];
}

export const ProfileGrid = ({ items }: ProfileGridProps) => {
  const [openDialogId, setOpenDialogId] = useState<string | null>(null);

  const resolvedItems = items.map((item) => {
    if (item.type === "custom") {
      return item;
    }
    const { action, ...rest } = item;
    const onClick =
      action.type === "link"
        ? () => window.open(action.href, "_blank")
        : () => setOpenDialogId(action.dialogId);
    return { ...rest, onClick };
  });

  return (
    <>
      <AppIconGrid items={resolvedItems} />
      {/* TODO: openDialogId に応じたダイアログを表示 */}
    </>
  );
};
