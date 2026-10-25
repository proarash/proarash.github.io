"use client";

import * as React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type SheetFieldProps = Omit<React.ComponentProps<typeof Sheet>, "children"> & {
  trigger: React.ComponentProps<typeof SheetTrigger>["render"];
  title?: string;
  description?: string;
  side?: React.ComponentProps<typeof SheetContent>["side"];
  showCloseButton?: boolean;
  contentClassName?: string;
  children?: React.ReactNode;
};

const SheetField = ({
  trigger,
  title,
  description,
  side,
  showCloseButton,
  contentClassName,
  children,
  ...props
}: SheetFieldProps) => {
  return (
    <Sheet {...props}>
      <SheetTrigger render={trigger} />
      <SheetContent
        side={side}
        showCloseButton={showCloseButton}
        className={cn("bg-card", contentClassName)}
      >
        {(title || description) && (
          <SheetHeader>
            {title && <SheetTitle>{title}</SheetTitle>}
            {description && <SheetDescription>{description}</SheetDescription>}
          </SheetHeader>
        )}
        {children}
      </SheetContent>
    </Sheet>
  );
};

export { SheetField };
