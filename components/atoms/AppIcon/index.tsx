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
      className="flex flex-col items-center gap-1 w-full"
    >
      <div className="aspect-square w-full flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm text-3xl">
        {icon}
      </div>
      <span className="text-xs text-white/80 truncate w-full text-center">
        {label}
      </span>
    </button>
  );
};
