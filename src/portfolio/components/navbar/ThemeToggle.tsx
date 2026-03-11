import { Moon, Sun } from "lucide-react";

type Props = {
  isDark: boolean;
  onToggle: () => void;
  className?: string;
};

//Button that handles the triggering of the custom hook to chage from dark mode to light
export const ThemeToggle = ({ isDark, onToggle, className = "" }: Props) => {
  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors ${className}`}
      aria-label="Toggle theme"
      type="button"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};
