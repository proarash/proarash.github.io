"use client";

import { IdCardIcon, RefreshCwIcon, ShuffleIcon, SparklesIcon } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { AlertField } from "@/components/shared/alert-field";
import {
  generateNationalCode,
  generateRoundNationalCode,
} from "@/lib/national-code";
import dynamic from "next/dynamic";

const NationalCodeForm = dynamic(
  () => import("./national-code-form").then((mod) => mod.NationalCodeForm),
  { ssr: false },
);

const NationalCodeGenerators = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <AlertField
        variant="info"
        description="کد ملی های تولید شده کاملا تصادفی هستند و فقط برای تست در توسعه نرم افزار هستند و مناسب احراز هویت در سایت های دولتی نیست"
      />
      <NationalCodeForm
        label="کد ملی"
        buttonLabel="تولید کد ملی"
        generate={generateNationalCode}
        icon={IdCardIcon}
        buttonIcon={ShuffleIcon}
      />
      <Separator />
      <NationalCodeForm
        label="کد ملی رند"
        buttonLabel="تولید کد ملی رند"
        generate={generateRoundNationalCode}
        icon={SparklesIcon}
        buttonIcon={RefreshCwIcon}
      />
    </div>
  );
};

export { NationalCodeGenerators };
