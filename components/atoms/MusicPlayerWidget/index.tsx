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
  label: string;
  autoplayDelay?: number;
}

export const MusicPlayerWidget = ({
  items,
  label,
  autoplayDelay = 3000,
}: MusicPlayerWidgetProps) => {
  return (
    <div className="relative p-2 h-full">
      <div className="relative flex flex-col justify-center gap-4 h-full p-3 rounded-lg backdrop-blur-sm border border-black/20">
        {/* 楽曲情報 */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
          loop
          className="w-full min-h-12"
        >
          {items.map((item) => (
            <SwiperSlide key={`${item.title}-${item.artist}`}>
              <div className="flex flex-col gap-0.5 px-1 pt-1">
                <span className="text-sm font-semibold text-miku leading-tight block truncate">
                  {item.title}
                </span>
                <span className="text-xs text-miku leading-tight block truncate opacity-60">
                  {item.artist}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* シークバー */}
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
          <div className="flex items-center justify-center w-8 h-8 rounded-full backdrop-blur-sm">
            <Play
              size={16}
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
      <span className="absolute top-full left-1/2 -translate-x-1/2 text-xs text-miku whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};
