import { useEffect } from "react";
import { useAppSelector } from "@/state/hooks";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useAppSelector((s) => s.theme.mode);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
