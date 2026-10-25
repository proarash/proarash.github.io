"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  HouseIcon,
  MenuIcon,
  NewspaperIcon,
  CircleUserIcon,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Button, buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { SheetField } from "@/components/shared/sheet-field";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "خانه", icon: HouseIcon },
  { href: "/blog", label: "بلاگ", icon: NewspaperIcon },
  { href: "/about", label: "درباره من", icon: CircleUserIcon },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activeHref =
    navItems.find((item) =>
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href),
    )?.href ?? "/";

  const renderLinks = (className?: string) =>
    navItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        aria-label={item.label}
        aria-current={activeHref === item.href ? "page" : undefined}
        onClick={() => setOpen(false)}
        className={buttonVariants({
          variant: activeHref === item.href ? "subtle-primary" : "ghost",
          className: cn("rounded-full", className),
        })}
      >
        <item.icon />
        {item.label}
      </Link>
    ));

  return (
    <header className="flex justify-center px-2 pt-2 md:px-4 md:pt-4">
      <nav className="flex w-full max-w-360 items-center gap-1 rounded-full border bg-card p-1.5 shadow-lg md:w-fit">
        <div className="md:hidden">
          <SheetField
            open={open}
            onOpenChange={setOpen}
            side="right"
            title="منو"
            trigger={
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label="باز کردن منو"
              >
                <MenuIcon />
              </Button>
            }
          >
            <div className="flex flex-col gap-1 px-4">
              {renderLinks("justify-start")}
            </div>
          </SheetField>
        </div>
        <div className="ms-auto md:ms-0">
          <ThemeToggle />
        </div>
        <Separator orientation="vertical" className="mx-1 my-2 hidden md:block" />
        <div className="hidden items-center gap-1 md:flex">{renderLinks()}</div>
      </nav>
    </header>
  );
};

export { Navbar };
