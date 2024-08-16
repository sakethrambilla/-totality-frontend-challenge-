"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme == "light" ? <Sun /> : <Moon />}
    </div>
  );
}
