import { ButtonProps } from "./ButtonProps";
import ArrowIcon from "./arrow.svg";
import classnames from "classnames";
import style from "./Button.module.css";

export const Button = ({
  apperance,
  arrow = "none",
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={classnames(style.button, className, {
        [style.primary]: apperance === "primary",
        [style.ghost]: apperance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && 
        <span className={classnames(style.arrow, { [style.down]: arrow === "down" })}>
          <ArrowIcon />
        </span>
      }
    </button>
  );
};
