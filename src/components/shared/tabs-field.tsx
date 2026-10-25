"use client";

import * as React from "react";
import type { LucideIcon } from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export type TabsFieldItem = {
  value: string;
  label: string;
  icon?: LucideIcon;
  content: React.ReactNode;
};

type TabsFieldProps = React.ComponentProps<typeof Tabs> & {
  items: TabsFieldItem[];
  listClassName?: string;
  contentClassName?: string;
};

const TabsField = ({
  items,
  listClassName,
  contentClassName,
  defaultValue,
  ...props
}: TabsFieldProps) => {
  return (
    <Tabs defaultValue={defaultValue ?? items[0]?.value} {...props}>
      <TabsList className={cn("w-full", listClassName)}>
        {items.map((item) => (
          <TabsTrigger key={item.value} value={item.value}>
            {item.icon && <item.icon />}
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((item) => (
        <TabsContent
          key={item.value}
          value={item.value}
          className={cn("pt-2", contentClassName)}
        >
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export { TabsField };
