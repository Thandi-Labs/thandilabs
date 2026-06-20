import { Sun, Moon } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { toggleTheme } from "@/state/slices/themeSlice";

const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((s) => s.theme.mode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      aria-label="Toggle theme"
      className={`flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition-all duration-200 hover:border-zinc-300 hover:text-zinc-700 dark:border-white/10 dark:text-zinc-400 dark:hover:border-white/20 dark:hover:text-zinc-200 ${className}`}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
