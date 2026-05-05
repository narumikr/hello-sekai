"use client";

import { useEffect, useState } from "react";

/**
 * 現在時刻を定期的に更新して返すフック
 * @param updateInterval 更新間隔（ミリ秒）
 */
export const useCurrentTime = (updateInterval = 1000) => {
  const [currentTime, setCurrentTime] = useState<Date>(() => new Date());

  useEffect(() => {
    setCurrentTime(new Date());

    const timerId = window.setInterval(() => {
      setCurrentTime(new Date());
    }, updateInterval);

    return () => {
      window.clearInterval(timerId);
    };
  }, [updateInterval]);

  return currentTime;
};

/**
 * 現在時刻に応じた時間帯を返すフック
 *
 * @remarks | 時間帯の定義 | 時間帯の範囲（24時間表記） |
 * | --- | --- |
 * | Morning | 1時〜9時未満 |
 * | Afternoon | 9時〜17時未満 |
 * | Night | 17時〜25時 |
 * @returns "Morning" | "Afternoon" | "Night"
 */
export const TimePeriod = {
  Morning: "Morning",
  Afternoon: "Afternoon",
  Night: "Night",
};
export const useCurrentTimePeriod = (updateInterval = 1000) => {
  const currentTime = useCurrentTime(updateInterval);
  const hour = currentTime.getHours();

  if (hour >= 1 && hour < 9) {
    return TimePeriod.Morning;
  }

  if (hour >= 9 && hour < 17) {
    return TimePeriod.Afternoon;
  }

  return TimePeriod.Night;
};
