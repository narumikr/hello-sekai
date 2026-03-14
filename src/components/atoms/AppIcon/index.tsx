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
      className="relative flex flex-col items-center w-full h-full p-2 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
    >
      <div
        aria-hidden="true"
        className="@container aspect-square w-full relative flex items-center justify-center rounded-lg backdrop-blur-sm border border-miku"
      >
        <Image
          src={iconPath}
          alt=""
          fill
          sizes="(max-width: 640px) 20vw, (max-width: 1024px) 10vw, 64px"
          className="object-contain rounded-2xl p-2"
        />
      </div>
      <span className="absolute top-full left-1/2 -translate-x-1/2 text-xs text-miku whitespace-nowrap">
        {label}
      </span>
    </button>
  );
};
