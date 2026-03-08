# AppIconGrid カスタムアイテム対応 実装計画

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** `AppIconGrid` を discriminated union 型で拡張し、`type: "custom"` のアイテムは `children` をそのまま描画できるようにする。

**Architecture:** `AppIconGridItem` 型を discriminated union として定義する。`type` を省略した場合は `"icon"` 扱いとし後方互換を保つ。描画時に `type === "custom"` かどうかで分岐する。

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS

---

### Task 1: `AppIconGrid` の型と描画ロジックを拡張する

**Files:**
- Modify: `components/molecules/AppIconGrid/index.tsx`

**Step 1: 既存の `AppIconItem` export を `AppIconGridItem` discriminated union に置き換える**

`components/molecules/AppIconGrid/index.tsx` を以下に書き換える：

```tsx
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
      children: ReactNode;
      colSpan?: number;
      rowSpan?: number;
    };

// 後方互換のため AppIconItem も export する
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
```

**Step 2: 型チェックを実行して既存コードへの影響がないことを確認**

```bash
pnpm typecheck
```

期待: エラーなし（`AppIconItem` を re-export しているため既存コードは変更不要）

**Step 3: lint チェック**

```bash
pnpm check
```

期待: エラーなし

**Step 4: コミット**

```bash
git add components/molecules/AppIconGrid/index.tsx
git commit -m "feat: AppIconGrid に type:custom アイテムのサポートを追加"
```

---

### Task 2: 動作確認（手動）

開発サーバーを起動し、既存の AppIcon グリッドが崩れていないことを目視確認する。

```bash
pnpm dev
```

- `/ja/profile` にアクセスして AppIconGrid が正常に表示されること
- `type: "custom"` を試す場合は `application.constant.ts` に以下のようなアイテムを一時追加して確認できる：

```ts
{
  id: "custom-test",
  type: "custom",
  children: <div className="w-full h-full bg-red-500 rounded-lg" />,
  colSpan: 2,
  rowSpan: 1,
}
```

確認後、テスト用アイテムは削除する。
