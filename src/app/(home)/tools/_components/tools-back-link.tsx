"use client";

import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

const ToolsBackLink = () => {
  return (
    <div className="mx-auto w-full max-w-xl px-4 pt-6">
      <Link
        href="/"
        className={buttonVariants({ variant: "outline" })}
      >
        <ArrowRightIcon />
        بازگشت به خانه
      </Link>
    </div>
  );
};

export { ToolsBackLink };
