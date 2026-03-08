"use client";

import { Play, SkipBack, SkipForward } from "lucide-react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
        {items.map((item) => (
          <SwiperSlide key={`${item.title}-${item.artist}`}>
            <div className="flex flex-col gap-0.5 px-1 pt-1">
              <span className="text-sm font-semibold text-miku leading-tight line-clamp-2">
                {item.title}
              </span>
              <span className="text-xs text-miku leading-tight truncate opacity-60">
                {item.artist}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* シークバー（装飾） */}
      <div className="px-1 mt-2">
        <div className="relative h-1 w-full rounded-full bg-black/10">
          <div className="absolute left-0 top-0 h-full w-2/5 rounded-full bg-miku opacity-60" />
          <div
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-miku shadow-sm"
            style={{ left: "40%" }}
          />
        </div>
      </div>

      {/* コントロールボタン（装飾） */}
      <div className="flex items-center justify-center gap-4 mt-2">
        <SkipBack
          size={16}
          className="text-miku opacity-70"
          aria-hidden="true"
        />
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-black/20 backdrop-blur-sm">
          <Play
            size={14}
            className="text-miku translate-x-0.5"
            aria-hidden="true"
          />
        </div>
        <SkipForward
          size={16}
          className="text-miku opacity-70"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
