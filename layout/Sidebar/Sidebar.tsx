import { SidebarProps } from "./Sidebar.props";
import classnames from "classnames";
import style from "./Sidebar.module.css";
import Logo from "./Logo.svg";
import { Menu } from "../Menu/Menu";

export const Sidebar = ({ className,...props }: SidebarProps): JSX.Element => {
  return (
    <div className={classnames(className, style.sidebar)}{...props}>
      <Logo className={style.logo}/>
      <div>Поиск</div>
      <Menu />
    </div>
  );
};
