import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface SideBarContextType {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBarContext = createContext<SideBarContextType | null>(null);

export const useSideBar = () => {
  const context = useContext(SideBarContext);
  if (!context) {
    throw new Error("useSideBar must be used within SideBarProvider");
  }
  return context;
};

export const SideBarProvider = ({ children }: { children: ReactNode }) => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <SideBarContext.Provider value={{ showSideBar, setShowSideBar }}>
      {children}
    </SideBarContext.Provider>
  );
};