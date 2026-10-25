"use client";

import * as React from "react";
import { CheckIcon, CopyIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

type CopyButtonProps = Omit<React.ComponentProps<typeof Button>, "onClick"> & {
  value: string;
  label: string;
};

const CopyButton = ({
  value,
  label,
  variant = "ghost",
  size = "icon-xs",
  ...props
}: CopyButtonProps) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    if (!value) return;
    await navigator.clipboard.writeText(value);
    setCopied(true);
    toast.success(`${label} کپی شد`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      aria-label={`کپی ${label}`}
      onClick={handleCopy}
      {...props}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </Button>
  );
};

export { CopyButton };
