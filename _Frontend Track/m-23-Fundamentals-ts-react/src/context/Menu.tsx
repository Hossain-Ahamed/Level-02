import React, { createContext, ReactNode } from "react";

type TMenuContext = {
    theme : string
}
const MenuContext = createContext<TMenuContext | undefined>(undefined);

export const MenuList = ({ children }: { children: ReactNode }) => {
  return (
    <MenuContext.Provider value={{ theme: "dark" }}>
      {children}
    </MenuContext.Provider>
  );
};

export const MenuItem = () => {
  return (
    <>
      <p>Menu Item</p>
    </>
  );
};








