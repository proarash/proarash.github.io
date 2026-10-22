"use client";

import * as React from "react";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";

type IconSvgElement = React.ComponentProps<typeof HugeiconsIcon>["icon"];

export type SelectFieldOption = {
  value: string;
  label: string;
  icon?: IconSvgElement;
  disabled?: boolean;
};

type SelectFieldProps = React.ComponentProps<typeof Select> & {
  label?: string;
  groupLabel?: string;
  placeholder?: string;
  options: SelectFieldOption[];
  className?: string;
  triggerClassName?: string;
  triggerSize?: React.ComponentProps<typeof SelectTrigger>["size"];
};

const SelectField = ({
  label,
  groupLabel,
  placeholder,
  options,
  className,
  triggerClassName,
  triggerSize,
  ...props
}: SelectFieldProps) => {
  const id = React.useId();

  return (
    <div className={cn("flex items-center gap-5", className)}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Select {...props}>
        <SelectTrigger
          id={id}
          size={triggerSize}
          className={cn("w-full", triggerClassName)}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {groupLabel && <SelectLabel>{groupLabel}</SelectLabel>}
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.icon && (
                  <HugeiconsIcon icon={option.icon} strokeWidth={2} />
                )}
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export { SelectField };
