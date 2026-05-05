"use client";

import {
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  type LucideProps,
} from "lucide-react";
import { useCurrentTimePeriod } from "@/hooks/useCurrentTime";

export const BatteryIcon = (props: LucideProps) => {
  const currentTimePeriod = useCurrentTimePeriod();

  if (currentTimePeriod === "Morning") {
    return <BatteryFull {...props} />;
  }

  if (currentTimePeriod === "Afternoon") {
    return <BatteryMedium {...props} />;
  }

  return <BatteryLow {...props} />;
};
