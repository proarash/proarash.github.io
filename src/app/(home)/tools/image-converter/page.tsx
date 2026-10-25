import type { Metadata } from "next";

import { ContainerBox } from "@/components/shared/container-box";
import { ImageConverter } from "./_components/image-converter";

export const metadata: Metadata = {
  title: "تبدیل عکس",
};

export default function ImageConverterPage() {
  return (
    <section className="px-4 pt-2 pb-8">
      <ContainerBox className="mx-auto flex w-full max-w-xl flex-col gap-6">
        <h1 className="text-lg font-semibold">تبدیل عکس</h1>
        <ImageConverter />
      </ContainerBox>
    </section>
  );
}
