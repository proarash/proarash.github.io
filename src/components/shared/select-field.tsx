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
import type { LucideIcon } from "lucide-react";

export type SelectFieldOption = {
  value: string;
  label: string;
  icon?: LucideIcon;
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
                  <option.icon />
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
