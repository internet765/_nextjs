import { SidebarProps } from "./Sidebar.props";
import classnames from "classnames";
import style from "./Sidebar.module.css";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
       Sidebar
    </div>
  );
};
