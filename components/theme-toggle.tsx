"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { usePostHog } from "@/lib/use-posthog";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { track } = usePostHog();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    track('theme_toggle', {
      from_theme: resolvedTheme,
      to_theme: newTheme,
      location: 'theme_toggle_button'
    });
  };

  if (!mounted) {
    return <Button variant="outline" size="icon" />;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleThemeToggle}
    >
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ThemeToggle;
