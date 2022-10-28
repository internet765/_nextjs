import { ButtonProps } from "./ButtonProps";
import classnames from "classnames";
import style from "./Button.module.css";

export const Button = ({ apperance, children }: ButtonProps): JSX.Element => {
  return <button className={classnames(style.button, {
    [style.primary] : apperance === 'primary',
    [style.ghost] : apperance === 'ghost',
  })}>{children}</button>;
};
