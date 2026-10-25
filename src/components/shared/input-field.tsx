"use client";

import * as React from "react";

import { Label } from "@/components/ui/label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

type InputFieldProps = React.ComponentProps<typeof InputGroupInput> & {
  label?: string;
  startAddon?: React.ReactNode;
  endAddon?: React.ReactNode;
  containerClassName?: string;
  groupClassName?: string;
};

const InputField = ({
  label,
  startAddon,
  endAddon,
  containerClassName,
  groupClassName,
  id,
  ...props
}: InputFieldProps) => {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;

  return (
    <div className={cn("flex w-full flex-col gap-2", containerClassName)}>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <InputGroup className={groupClassName}>
        <InputGroupInput id={inputId} {...props} />
        {startAddon && (
          <InputGroupAddon align="inline-start">{startAddon}</InputGroupAddon>
        )}
        {endAddon && (
          <InputGroupAddon align="inline-end">{endAddon}</InputGroupAddon>
        )}
      </InputGroup>
    </div>
  );
};

export { InputField };
