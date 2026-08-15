import { HugeiconsIcon } from "@hugeicons/react";
import {
  Call02Icon,
  HandshakeIcon,
  SourceCodeIcon,
  UserCircleIcon,
} from "@hugeicons/core-free-icons";
import SidebarMenu, { SidebarMenuProps } from "./sidebar-menu";
import { AppRoutes } from "../../lib/app.routes";

const MainSidebarItems = () => {
  const menuArray: SidebarMenuProps[] = [
    {
      title: "About me",
      icon: <HugeiconsIcon icon={UserCircleIcon} />,
      url: AppRoutes.about,
    },
    {
      title: "Skills",
      icon: <HugeiconsIcon icon={SourceCodeIcon} />,
      url: AppRoutes.skills,
    },
    {
      title: "Request project",
      icon: <HugeiconsIcon icon={HandshakeIcon} />,
      url: AppRoutes.inquiry,
    },
    {
      title: "Stay in touch",
      icon: <HugeiconsIcon icon={Call02Icon} />,
      url: AppRoutes.contact,
    },
  ];
  return (
    <div className="flex flex-col gap-3 w-full h-full overflow-y-auto">
      {menuArray.map((v, i) => (
        <SidebarMenu data={v} key={i} />
      ))}
    </div>
  );
};

export default MainSidebarItems;
