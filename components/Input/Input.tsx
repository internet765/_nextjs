import { InputProps } from "./Input.props";
import classnames from "classnames";
import style from "./Input.module.css";

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
  return <input className={classnames(className, style.input)} {...props} />;
};
