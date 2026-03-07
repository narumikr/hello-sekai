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
      className="flex flex-col items-center gap-1 w-full focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
    >
      <div aria-hidden="true" className="aspect-square w-full flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm text-3xl">
        {icon}
      </div>
      <span className="text-xs text-white/80 truncate w-full text-center">
        {label}
      </span>
    </button>
  );
};
