import { SidebarProps } from "./Sidebar.props";
import classnames from "classnames";
import style from "./Sidebar.module.css";
import { Menu } from '../Menu/Menu';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
       <Menu/>
    </div>
  );
};
