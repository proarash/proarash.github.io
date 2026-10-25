import type { Metadata } from "next";

import { ContainerBox } from "@/components/shared/container-box";
import { UuidTool } from "./_components/uuid-tool";

export const metadata: Metadata = {
  title: "تولید و تبدیل UUID",
};

export default function UuidGeneratorPage() {
  return (
    <section className="px-4 pt-2 pb-8">
      <ContainerBox className="mx-auto flex w-full max-w-xl flex-col gap-6">
        <h1 className="text-lg font-semibold">تولید و تبدیل UUID</h1>
        <UuidTool />
      </ContainerBox>
    </section>
  );
}
