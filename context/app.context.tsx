import { ReactNode, createContext, useState } from "react";
import { MenuItem } from "../interfaces/menu.interface";
import { TopLevelGategory } from "../interfaces/page.interface";

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelGategory;
  setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelGategory.Courses,
});

export const AppContextProvider = ({
  menu,
  firstCategory,
  children,
}: IAppContext & { children: ReactNode }): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);

  const setMenu = (menu: MenuItem[]) => {
    return setMenuState(menu);
  };

  return (
    <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
