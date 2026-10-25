"use client";

import dynamic from "next/dynamic";

const JwtTool = dynamic(
  () => import("./jwt-form").then((mod) => mod.JwtForm),
  { ssr: false },
);

export { JwtTool };
