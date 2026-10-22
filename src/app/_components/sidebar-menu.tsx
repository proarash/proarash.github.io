"use client";
import { ReactNode } from "react";
import { Separator } from "../../components/ui/separator";
import Link from "next/link";

export type SidebarMenuProps = {
  title: string;
  url: string;
  icon?: ReactNode;
};

const SidebarMenu = ({ data }: { data: SidebarMenuProps }) => {
  return (
    <Link
      href={data.url}
      className="flex items-center gap-2 rounded-sm hover:bg-card p-1 transition active:bg-accent/90 w-full"
    >
      {data.icon}
      <Separator orientation="vertical" />
      <span>{data.title}</span>
    </Link>
  );
};

export default SidebarMenu;
