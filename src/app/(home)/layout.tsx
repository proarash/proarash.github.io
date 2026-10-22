import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "../_components/app-sidebar";
import AppProvider from "../app-provider";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="md:p-5">{children}</SidebarInset>
      </SidebarProvider>
    </AppProvider>
  );
}
