"use client";

import {
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  type LucideProps,
} from "lucide-react";
import { TimePeriod, useCurrentTimePeriod } from "@/hooks/useCurrentTime";

export const BatteryIcon = (props: LucideProps) => {
  const currentTimePeriod = useCurrentTimePeriod(3_600_000);

  if (currentTimePeriod === TimePeriod.Morning) {
    return <BatteryFull {...props} />;
  }

  if (currentTimePeriod === TimePeriod.Afternoon) {
    return <BatteryMedium {...props} />;
  }

  return <BatteryLow {...props} />;
};
