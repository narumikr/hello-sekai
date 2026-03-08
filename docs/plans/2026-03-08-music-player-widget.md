# MusicPlayerWidget 実装計画

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-step.

**Goal:** 楽曲情報（タイトル・アーティスト）を Swiper で自動スワイプする表示専用の音楽プレーヤーウィジェットを molecules コンポーネントとして作成する。

**Architecture:** `components/molecules/MusicPlayerWidget/index.tsx` に単一コンポーネントを作成する。Swiper の `Autoplay` + `EffectFade` モジュールで楽曲情報をフェードスライド。再生ボタン等は lucide-react アイコンで装飾のみ（機能なし）。スタイルは `AppIcon` と統一した glassmorphism。

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS, swiper@12, lucide-react

---

### Task 1: MusicPlayerWidget コンポーネントを作成する

**Files:**
- Create: `components/molecules/MusicPlayerWidget/index.tsx`

**Step 1: ファイルを作成する**

以下の内容で `components/molecules/MusicPlayerWidget/index.tsx` を作成する：

```tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Play, SkipBack, SkipForward } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";

export interface MusicPlayerItem {
  title: string;
  artist: string;
}

interface MusicPlayerWidgetProps {
  items: MusicPlayerItem[];
  autoplayDelay?: number;
}

export const MusicPlayerWidget = ({
  items,
  autoplayDelay = 3000,
}: MusicPlayerWidgetProps) => {
  return (
    <div className="relative flex flex-col justify-between w-full h-full p-3 rounded-lg backdrop-blur-sm border border-black/20 overflow-hidden">
      {/* 楽曲情報スワイプエリア */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
        loop
        className="w-full flex-1"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-0.5 px-1 pt-1">
              <span className="text-sm font-semibold text-miku leading-tight line-clamp-2">
                {item.title}
              </span>
              <span className="text-xs text-miku/60 truncate">{item.artist}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* シークバー（装飾） */}
      <div className="px-1 mt-2">
        <div className="relative h-1 w-full rounded-full bg-black/10">
          <div className="absolute left-0 top-0 h-full w-2/5 rounded-full bg-miku/60" />
          <div className="absolute top-1/2 left-2/5 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-miku shadow-sm" />
        </div>
      </div>

      {/* コントロールボタン（装飾） */}
      <div className="flex items-center justify-center gap-4 mt-2">
        <SkipBack
          size={16}
          className="text-miku/70"
          aria-hidden="true"
        />
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-black/20 backdrop-blur-sm">
          <Play size={14} className="text-miku translate-x-0.5" aria-hidden="true" />
        </div>
        <SkipForward
          size={16}
          className="text-miku/70"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
```

**Step 2: 型チェックを実行する**

```bash
pnpm typecheck
```

期待: エラーなし

**Step 3: lint チェック**

```bash
pnpm check
```

期待: エラーなし（または既存の警告のみ）

**Step 4: コミット**

```bash
git add components/molecules/MusicPlayerWidget/index.tsx
git commit -m "feat: MusicPlayerWidget コンポーネントを追加"
```

---

### Task 2: 動作確認（手動）

開発サーバーを起動し、`application.constant.tsx` にカスタムアイテムとして追加して目視確認する。

```bash
pnpm dev
```

`application.constant.tsx` の `applicationIcons` に以下を追加してテスト：

```tsx
// ファイル先頭に追加
import { MusicPlayerWidget } from "@/components/molecules/MusicPlayerWidget";

// applicationIcons 配列の任意の位置に追加
{
  id: "music-player",
  type: "custom",
  colSpan: 2,
  rowSpan: 2,
  children: (
    <MusicPlayerWidget
      items={[
        { title: "初音ミクの消失", artist: "cosMo@暴走P" },
        { title: "エンドマークに希望と涙を添えて", artist: "ハチ" },
        { title: "ワールドイズマイン", artist: "ryo" },
      ]}
    />
  ),
},
```

- `/ja/profile` にアクセスして MusicPlayerWidget がグリッド上に表示されること
- 楽曲情報が自動スワイプされること
- glassmorphism スタイルが AppIcon と統一されていること
- 確認後、テスト用エントリは本番用に整理する
