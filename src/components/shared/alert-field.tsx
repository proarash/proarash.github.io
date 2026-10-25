import * as React from "react";
import { CircleAlertIcon, InfoIcon, type LucideIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

type AlertFieldVariant = "default" | "destructive" | "info";

type AlertFieldProps = Omit<React.ComponentProps<typeof Alert>, "variant"> & {
  variant?: AlertFieldVariant;
  title?: string;
  description?: React.ReactNode;
  icon?: LucideIcon;
};

const variantIcons: Record<AlertFieldVariant, LucideIcon | undefined> = {
  default: undefined,
  destructive: CircleAlertIcon,
  info: InfoIcon,
};

const AlertField = ({
  variant = "default",
  title,
  description,
  icon,
  className,
  ...props
}: AlertFieldProps) => {
  const Icon = icon ?? variantIcons[variant];

  return (
    <Alert
      variant={variant === "destructive" ? "destructive" : "default"}
      className={cn(
        "text-start",
        variant === "info" &&
          "border-sky-500/30 bg-sky-500/10 text-sky-700 *:data-[slot=alert-description]:text-sky-700/90 dark:text-sky-300 dark:*:data-[slot=alert-description]:text-sky-300/90",
        className,
      )}
      {...props}
    >
      {Icon && <Icon />}
      {title && <AlertTitle>{title}</AlertTitle>}
      {description && <AlertDescription>{description}</AlertDescription>}
    </Alert>
  );
};

export { AlertField };
