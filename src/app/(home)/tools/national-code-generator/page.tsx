import type { Metadata } from "next";

import { ContainerBox } from "@/components/shared/container-box";
import { NationalCodeGenerators } from "./_components/national-code-generators";

export const metadata: Metadata = {
  title: "تولید کد ملی",
};

export default function NationalCodeGeneratorPage() {
  return (
    <section className="px-4 pt-2 pb-8">
      <ContainerBox className="mx-auto flex w-full max-w-xl flex-col gap-6">
        <h1 className="text-lg font-semibold">تولید کد ملی</h1>
        <NationalCodeGenerators />
      </ContainerBox>
    </section>
  );
}
