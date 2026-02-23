"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        console.log("Current theme:", theme);
        setTheme(theme === "light" ? "dark" : "light");
      }}
      className="relative flex h-9 w-9 items-center justify-center rounded-md border border-black/20 bg-white/50 text-black backdrop-blur-sm transition-colors hover:border-orange-500 dark:border-white/20 dark:bg-black/50 dark:text-white dark:hover:border-orange-500"
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  );
}
