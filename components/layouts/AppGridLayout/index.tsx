import type { ReactNode } from "react";

export type ColSpan = 1 | 2 | 3 | 4 | 5 | 6;
export type RowSpan = 1 | 2 | 3 | 4;

export interface AppGridLayoutItem {
  id: string;
  colSpan?: ColSpan;
  rowSpan?: RowSpan;
  children: ReactNode;
}

export interface AppGridLayoutProps {
  items: AppGridLayoutItem[];
}

export const AppGridLayout = ({ items }: AppGridLayoutProps) => {
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
            {item.children}
          </div>
        ))}
      </div>
    </div>
  );
};
