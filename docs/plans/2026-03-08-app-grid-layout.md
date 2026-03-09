# AppGridLayout リファクタリング実装計画

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** `AppIconGrid` を汎用グリッドコンテナ `AppGridLayout` に置き換え、コンテンツ描画の責務を呼び出し側に移動する。

**Architecture:** `AppGridLayout` は `id / colSpan / rowSpan / children` を持つアイテム配列を受け取るだけのシンプルなグリッドコンテナ。AppIcon の描画は `ProfileGrid` が担う。`AppIconGrid` は削除する。

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS

---

### Task 1: AppGridLayout コンポーネントを作成する

**Files:**
- Create: `components/molecules/AppGridLayout/index.tsx`

**Step 1: ファイルを作成する**

```tsx
import type { ReactNode } from "react";

export interface AppGridLayoutItem {
  id: string;
  colSpan?: number;
  rowSpan?: number;
  children: ReactNode;
}

interface AppGridLayoutProps {
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
```

**Step 2: TypeScript 型チェックを実行する**

```bash
pnpm typecheck
```

期待結果: エラーなし

**Step 3: コミット**

```bash
git add components/molecules/AppGridLayout/index.tsx
git commit -m "feat: AppGridLayout コンポーネントを追加"
```

---

### Task 2: ProfileGrid を更新し AppGridLayout を使用する

**Files:**
- Modify: `app/[lang]/profile/ProfileGrid.tsx`
- Modify: `app/[lang]/profile/application.constant.ts`（型の確認）

**Step 1: ProfileGrid の現在の実装を確認する**

`app/[lang]/profile/ProfileGrid.tsx` を読む。
`app/[lang]/profile/application.constant.ts` を読む（`ApplicationIconItem` の型を確認）。

**Step 2: ProfileGrid を更新する**

AppIcon と custom の描画ロジックを ProfileGrid 内で行い、children として `AppGridLayout` に渡す。

```tsx
"use client";

import { useState } from "react";
import { AppIcon } from "@/components/atoms/AppIcon";
import { AppGridLayout, type AppGridLayoutItem } from "@/components/molecules/AppGridLayout";
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
        <AppIcon
          iconPath={rest.iconPath}
          label={rest.label}
          onClick={onClick}
        />
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
```

**Step 3: TypeScript 型チェックを実行する**

```bash
pnpm typecheck
```

期待結果: エラーなし

**Step 4: コミット**

```bash
git add app/[lang]/profile/ProfileGrid.tsx
git commit -m "refactor: ProfileGrid で AppGridLayout を使用し描画ロジックを移動"
```

---

### Task 3: AppIconGrid を削除する

**Files:**
- Delete: `components/molecules/AppIconGrid/index.tsx`

**Step 1: AppIconGrid への参照が残っていないか確認する**

```bash
grep -r "AppIconGrid" --include="*.tsx" --include="*.ts" .
```

期待結果: 参照がゼロ（ProfileGrid.tsx から既に削除済みのため）

**Step 2: ファイルを削除する**

```bash
rm components/molecules/AppIconGrid/index.tsx
rmdir components/molecules/AppIconGrid
```

**Step 3: TypeScript 型チェックとビルドを実行する**

```bash
pnpm typecheck && pnpm build
```

期待結果: エラーなし

**Step 4: コミット**

```bash
git add -A
git commit -m "refactor: AppIconGrid を削除し AppGridLayout に統一"
```
