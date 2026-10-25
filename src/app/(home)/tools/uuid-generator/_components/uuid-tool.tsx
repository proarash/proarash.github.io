"use client";

import { ArrowLeftRightIcon, SparklesIcon } from "lucide-react";

import { TabsField } from "@/components/shared/tabs-field";
import dynamic from "next/dynamic";

const UuidConverterTab = dynamic(
  () => import("./uuid-converter-tab").then((mod) => mod.UuidConverterTab),
  { ssr: false },
);
const UuidGeneratorTab = dynamic(
  () => import("./uuid-generator-tab").then((mod) => mod.UuidGeneratorTab),
  { ssr: false },
);

const UuidTool = () => {
  return (
    <TabsField
      items={[
        {
          value: "generator",
          label: "تولید",
          icon: SparklesIcon,
          content: <UuidGeneratorTab />,
        },
        {
          value: "converter",
          label: "تبدیل و بررسی",
          icon: ArrowLeftRightIcon,
          content: <UuidConverterTab />,
        },
      ]}
    />
  );
};

export { UuidTool };
