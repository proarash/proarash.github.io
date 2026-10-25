"use client";

import * as React from "react";

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

type PopoverFieldProps = Omit<React.ComponentProps<typeof Popover>, "children"> & {
  children?: React.ReactNode;
  trigger: React.ComponentProps<typeof PopoverTrigger>["render"];
  title?: string;
  description?: string;
  contentClassName?: string;
  align?: React.ComponentProps<typeof PopoverContent>["align"];
  side?: React.ComponentProps<typeof PopoverContent>["side"];
  sideOffset?: React.ComponentProps<typeof PopoverContent>["sideOffset"];
};

const PopoverField = ({
  trigger,
  title,
  description,
  contentClassName,
  align,
  side,
  sideOffset,
  children,
  ...props
}: PopoverFieldProps) => {
  return (
    <Popover {...props}>
      <PopoverTrigger render={trigger} />
      <PopoverContent
        align={align}
        side={side}
        sideOffset={sideOffset}
        className={contentClassName}
      >
        {(title || description) && (
          <PopoverHeader>
            {title && <PopoverTitle>{title}</PopoverTitle>}
            {description && (
              <PopoverDescription>{description}</PopoverDescription>
            )}
          </PopoverHeader>
        )}
        {children}
      </PopoverContent>
    </Popover>
  );
};

export { PopoverField };
