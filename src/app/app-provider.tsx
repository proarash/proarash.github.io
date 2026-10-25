"use client";
import { ReactNode } from "react";
import CustomThemeProvider from "../components/shared/custom-theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <TooltipProvider>
      <CustomThemeProvider
        attribute={"class"}
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster position="top-center" dir="rtl" />
      </CustomThemeProvider>
    </TooltipProvider>
  );
};

export default AppProvider;
