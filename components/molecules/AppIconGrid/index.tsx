import type { ReactNode } from "react";
import { AppIcon } from "@/components/atoms/AppIcon";

export type AppIconGridItem =
  | {
      type?: "icon";
      id: string;
      iconPath: string;
      label: string;
      colSpan?: number;
      rowSpan?: number;
      onClick?: () => void;
    }
  | {
      type: "custom";
      id: string;
      label: string;
      children: ReactNode;
      colSpan?: number;
      rowSpan?: number;
    };

export type AppIconItem = Extract<AppIconGridItem, { type?: "icon" }>;

interface AppIconGridProps {
  items: AppIconGridItem[];
}

export const AppIconGrid = ({ items }: AppIconGridProps) => {
  return (
    <div className="w-full max-w-180 mx-auto px-4">
      <div className="grid grid-cols-4 md:grid-cols-6 gap-4 auto-rows-[minmax(4rem,auto)]">
        {items.map((item) => (
          <div
            key={item.id}
            className="h-full"
            style={{
              gridColumn: item.colSpan ? `span ${item.colSpan}` : undefined,
              gridRow: item.rowSpan ? `span ${item.rowSpan}` : undefined,
            }}
          >
            {item.type === "custom" ? (
              item.children
            ) : (
              <AppIcon
                iconPath={item.iconPath}
                label={item.label}
                onClick={item.onClick}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
