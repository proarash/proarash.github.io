"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PopoverField } from "@/components/shared/popover-field";
import { cn } from "@/lib/utils";

const themes = [
  { value: "light", label: "روشن", icon: SunIcon },
  { value: "dark", label: "تاریک", icon: MoonIcon },
  { value: "system", label: "سیستم", icon: MonitorIcon },
];

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <PopoverField
      open={open}
      onOpenChange={setOpen}
      align="start"
      sideOffset={12}
      contentClassName="w-36 gap-1 p-1"
      trigger={
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          aria-label="تغییر تم"
        >
          <SunIcon className="dark:hidden" />
          <MoonIcon className="hidden dark:block" />
        </Button>
      }
    >
      {themes.map((item) => (
        <Button
          key={item.value}
          variant="ghost"
          className={cn("justify-start", theme === item.value && "bg-muted")}
          onClick={() => {
            setTheme(item.value);
            setOpen(false);
          }}
        >
          <item.icon />
          {item.label}
        </Button>
      ))}
    </PopoverField>
  );
};

export { ThemeToggle };
