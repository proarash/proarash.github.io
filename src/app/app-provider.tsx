"use client";
import { ReactNode } from "react";
import CustomThemeProvider from "../components/shared/custom-theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

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
      </CustomThemeProvider>
    </TooltipProvider>
  );
};

export default AppProvider;
