import { Signal, Wifi } from "lucide-react";
import { BatteryIcon } from "./BatteryIcon";
import { ClockDisplay } from "./ClockDisplay";

export const SmartPhoneLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="relative w-full max-w-180 mx-auto px-4">
      <div className="absolute top-4 left-4 z-10">
        <ClockDisplay className="text-miku text-xl font-semibold" />
      </div>
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2 text-miku">
        <Signal size={20} aria-hidden="true" />
        <Wifi size={20} aria-hidden="true" />
        <BatteryIcon size={24} aria-hidden="true" />
      </div>
      {children}
    </div>
  );
};
