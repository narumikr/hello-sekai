interface AppIconProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

export const AppIcon = ({ icon, label, onClick }: AppIconProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="mx-auto flex flex-col items-center gap-1 w-14 sm:w-20 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
    >
      <div
        aria-hidden="true"
        className="aspect-square w-full flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm text-xl sm:text-2xl border border-black/20"
      >
        {icon}
      </div>
      <span className="text-xs text-white/80 truncate w-14 sm:w-20 text-center">
        {label}
      </span>
    </button>
  );
};
