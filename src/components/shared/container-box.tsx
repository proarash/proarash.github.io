import * as React from "react";

import { cn } from "@/lib/utils";

const ContainerBox = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-card p-4 text-card-foreground shadow-lg md:p-6",
        className,
      )}
      {...props}
    />
  );
};

export { ContainerBox };
