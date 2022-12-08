import { PProps } from "./P.props";
import classnames from "classnames";
import style from "./P.module.css";

export const P = ({ size = "middle", children, className, ...props }: PProps): JSX.Element => {
  return (
    <p
      className={classnames(style.p,className, {
        [style.low]: size === "low",
        [style.middle]: size === "middle",
        [style.heigh]: size === "heigh",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
