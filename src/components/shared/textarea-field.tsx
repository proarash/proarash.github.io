"use client";

import * as React from "react";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type TextareaFieldProps = React.ComponentProps<typeof Textarea> & {
  label?: string;
  labelAction?: React.ReactNode;
  containerClassName?: string;
};

const TextareaField = ({
  label,
  labelAction,
  containerClassName,
  id,
  ...props
}: TextareaFieldProps) => {
  const generatedId = React.useId();
  const textareaId = id ?? generatedId;

  return (
    <div className={cn("flex w-full flex-col gap-2", containerClassName)}>
      {(label || labelAction) && (
        <div className="flex min-h-6 items-center justify-between gap-2">
          {label && <Label htmlFor={textareaId}>{label}</Label>}
          {labelAction}
        </div>
      )}
      <Textarea id={textareaId} {...props} />
    </div>
  );
};

export { TextareaField };
