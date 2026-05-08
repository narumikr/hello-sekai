"use client";

import { useCurrentTime } from "@/hooks/useCurrentTime";

interface ClockDisplayProps {
  className?: string;
}

export const ClockDisplay = ({ className }: ClockDisplayProps) => {
  const currentTime = useCurrentTime(60 * 1000);

  const hours = String(currentTime.getHours()).padStart(2, "0");
  const minutes = String(currentTime.getMinutes()).padStart(2, "0");

  return <span className={className}>{`${hours}:${minutes}`}</span>;
};
