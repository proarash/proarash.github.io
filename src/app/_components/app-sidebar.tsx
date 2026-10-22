"use client";

import { Download01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import MainSidebarItems from "./main-sidebar-items";

const AppSidebar = () => {
  return (
    <>
      {/* Mobile top bar — opens the sidebar, which renders as a Sheet on mobile. */}
      <div className="fixed top-0 z-10 flex w-full flex-col gap-3 justify-center bg-background p-3 md:hidden">
        <SidebarTrigger variant="outline" size="icon" />
        <Separator />
      </div>
      <Sidebar variant="floating" collapsible="offcanvas">
        <SidebarHeader>
          <div className="flex w-full items-center justify-between gap-3">
            <Avatar className="bg-secondary">
              <AvatarImage src={"me.png"} />
              <AvatarFallback>AG</AvatarFallback>
            </Avatar>
            <Button>
              <HugeiconsIcon icon={Download01Icon} strokeWidth={2} />
              {"CV"}
            </Button>
          </div>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent className="p-3">
          <MainSidebarItems />
        </SidebarContent>
      </Sidebar>
    </>
  );
};

export default AppSidebar;
