import { create } from "zustand";

type NavbarState = {
  activeHref: string;
  setActiveHref: (href: string) => void;
};

const useNavbarStore = create<NavbarState>((set) => ({
  activeHref: "/",
  setActiveHref: (href) => set({ activeHref: href }),
}));

export { useNavbarStore };
