import { TagProps } from "./Tag.props";
import classnames from "classnames";
import style from "./Tag.module.css";

export const Tag = ({
  size = "middle",
  children,
  color = "primary",
  href,
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={classnames(style.tag, className, {
        [style.low]: size === "low",
        [style.middle]: size === "middle",
        [style.ghost]: color === "ghost",
        [style.red]: color === "red",
        [style.grey]: color === "grey",
        [style.green]: color === "green",
        [style.primary]: color === "primary",
      })}
      {...props}
    >
      {" "}
      {href ? <a href={href}>{children}</a> : children}
    </div>
  );
};
