import Image from "next/image";

interface AppIconProps {
  iconPath: string;
  label: string;
  onClick?: () => void;
}

export const AppIcon = ({ iconPath, label, onClick }: AppIconProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex flex-col items-center  w-full p-2 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
    >
      <div
        aria-hidden="true"
        className="@container aspect-square w-full relative flex items-center justify-center rounded-lg backdrop-blur-sm border border-black/20"
      >
        <Image
          src={iconPath}
          alt=""
          fill
          className="object-contain rounded-2xl p-2"
        />
      </div>
      <span className="text-xs text-white/80 truncate w-full text-center">
        {label}
      </span>
    </button>
  );
};
