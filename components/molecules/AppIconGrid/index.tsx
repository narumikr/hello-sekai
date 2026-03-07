import { AppIcon } from "@/components/atoms/AppIcon";

export interface AppIconItem {
  id: string;
  icon: string;
  label: string;
  onClick?: () => void;
}

interface AppIconGridProps {
  items: AppIconItem[];
}

export const AppIconGrid = ({ items }: AppIconGridProps) => {
  return (
    <div className="w-full max-w-180 mx-auto px-4">
      <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
        {items.map((item) => (
          <AppIcon
            key={item.id}
            icon={item.icon}
            label={item.label}
            onClick={item.onClick}
          />
        ))}
      </div>
    </div>
  );
};
