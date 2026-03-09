# AppGridLayout リファクタリング設計

## 概要

`AppIconGrid` を汎用的な `AppGridLayout` コンポーネントに置き換える。
グリッドのレイアウト責務をコンポーネントに閉じ込め、コンテンツの描画は呼び出し側に委ねる。

## 設計方針

- `AppGridLayout` は `{ id, colSpan?, rowSpan?, children: ReactNode }[]` を受け取る純粋なグリッドコンテナ
- AppIcon 等のコンテンツ描画ロジックは含まない
- グリッドのカラム数は現状維持（`grid-cols-4 md:grid-cols-6`）

## コンポーネント構成

### AppGridLayout（新規）

**配置**: `components/molecules/AppGridLayout/index.tsx`

```ts
interface AppGridLayoutItem {
  id: string;
  colSpan?: number;
  rowSpan?: number;
  children: ReactNode;
}

interface AppGridLayoutProps {
  items: AppGridLayoutItem[];
}
```

### ProfileGrid（更新）

AppIcon / custom の描画ロジックを ProfileGrid に移動し、children として `AppGridLayout` に渡す。

### AppIconGrid（削除）

`AppGridLayout` に置き換えるため削除する。

## 変更ファイル

| ファイル | 変更種別 |
|---|---|
| `components/molecules/AppGridLayout/index.tsx` | 新規作成 |
| `components/molecules/AppIconGrid/index.tsx` | 削除 |
| `app/[lang]/profile/ProfileGrid.tsx` | 更新（描画ロジック移動） |
