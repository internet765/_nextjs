import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import { TopLevelGategory } from "../interfaces/page.interface";
import { FirstLevelMenuItem } from "../interfaces/menu.interface";

export const firstLevelMenu: FirstLevelMenuItem[] = [
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

export const peiceRu = (price: number): string =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .concat(" ₽");

export const devlOfNumber = (
  number: number,
  titles: [string, string, string]
): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};
