"use client";

import * as React from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

export type RadioGroupFieldOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type RadioGroupFieldProps = React.ComponentProps<typeof RadioGroup> & {
  label?: string;
  options: RadioGroupFieldOption[];
  containerClassName?: string;
};

const RadioGroupField = ({
  label,
  options,
  containerClassName,
  className,
  ...props
}: RadioGroupFieldProps) => {
  const id = React.useId();

  return (
    <div className={cn("flex w-full flex-col gap-3", containerClassName)}>
      {label && <Label id={`${id}-label`}>{label}</Label>}
      <RadioGroup
        aria-labelledby={label ? `${id}-label` : undefined}
        className={cn("flex flex-wrap gap-4", className)}
        {...props}
      >
        {options.map((option) => (
          <div key={option.value} className="flex items-center gap-2">
            <RadioGroupItem
              id={`${id}-${option.value}`}
              value={option.value}
              disabled={option.disabled}
            />
            <Label htmlFor={`${id}-${option.value}`} className="font-normal">
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export { RadioGroupField };
