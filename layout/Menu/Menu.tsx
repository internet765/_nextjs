import classnames from "classnames";
import style from "./Menu.module.css";
import React, { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import { TopLevelGategory } from "../../interfaces/page.interface";
import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelGategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: TopLevelGategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelGategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductsIcon />,
    id: TopLevelGategory.Products,
  },
];

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <a href={`/${m.route}`}>
              <div
                className={classnames(style.firstLevel, {
                  [style.firstLevelActive]: m.id == firstCategory,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </a>
            {m.id == firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={style.secondBlock}>
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={style.secondLevel}>{m._id.secondCategory}</div>
            <div
              className={classnames(style.secondLevelBlock, {
                [style.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <a
        href={`/${route}/${p.alias}`}
        className={classnames(style.thirdLevel, {
          [style.thirdLevelActive]: false,
        })}
      >
        {p.category}
      </a>
    ));
  };

  return <div className={style.menu}>{buildFirstLevel()}</div>;
};
