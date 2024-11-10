import { createContext, Dispatch, ReactNode, useState } from "react";

export type TThemenContext = {
  dark: boolean;
  setDark: Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext<TThemenContext | undefined>(undefined);

type TThemeProviderProps = {
  children: ReactNode;
};
const ThemeProvider = ({ children }: TThemeProviderProps) => {
  const [dark, setDark] = useState(true);

  const values = {
    dark,
    setDark,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
