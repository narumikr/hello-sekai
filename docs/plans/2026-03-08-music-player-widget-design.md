# MusicPlayerWidget 設計書

## 概要

楽曲情報（タイトル・アーティスト）を一定間隔でスワイプ表示する、表示専用の音楽プレーヤーウィジェットコンポーネント。

## 配置

- `components/molecules/MusicPlayerWidget/index.tsx`（Atomic Design: molecules）

## Props

```ts
interface MusicPlayerItem {
  title: string;
  artist: string;
}

interface MusicPlayerWidgetProps {
  items: MusicPlayerItem[];
  autoplayDelay?: number; // ms、デフォルト 3000
}
```

## レイアウト

```
┌──────────────────────────┐
│                          │
│  ♪  楽曲タイトル         │  ← Swiper でスワイプ（fade effect）
│     アーティスト名        │
│                          │
│   ──────●────────────   │  ← シークバー（静的・装飾のみ）
│                          │
│      ◀◀  ▶  ▶▶         │  ← lucide-react アイコン（クリック不要）
│                          │
└──────────────────────────┘
```

## スタイル

- AppIcon と統一した glassmorphism: `backdrop-blur-sm border border-black/20 rounded-lg`
- テキストは `text-miku`
- `w-full h-full`（サイズは親 = AppIconGrid の colSpan/rowSpan で決定）

## Swiper 設定

- `Autoplay` モジュール
- `loop: true`
- `effect: "fade"`
- `delay: autoplayDelay`（デフォルト 3000ms）

## アイコン（lucide-react）

| ボタン | アイコン |
|---|---|
| 戻る | `SkipBack` |
| 再生 | `Play` |
| 進む | `SkipForward` |
