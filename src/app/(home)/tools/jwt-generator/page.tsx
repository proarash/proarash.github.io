import type { Metadata } from "next";

import { ContainerBox } from "@/components/shared/container-box";
import { JwtTool } from "./_components/jwt-tool";

export const metadata: Metadata = {
  title: "تولید و رمزگشایی JWT",
};

export default function JwtGeneratorPage() {
  return (
    <section className="px-4 pt-2 pb-8">
      <ContainerBox className="mx-auto flex w-full max-w-xl flex-col gap-6">
        <h1 className="text-lg font-semibold">تولید و رمزگشایی JWT</h1>
        <JwtTool />
      </ContainerBox>
    </section>
  );
}
