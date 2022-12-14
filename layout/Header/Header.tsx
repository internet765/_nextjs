import { HeaderProps } from "./Header.props";
import classnames from "classnames";
import style from "./Sidebar.module.css";

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <header {...props}>
       Header
    </header>
  );
};
