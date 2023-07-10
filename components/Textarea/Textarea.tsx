import { TextareaProps } from "./Textarea.props";
import classnames from "classnames";
import style from "./Textarea.module.css";

export const Textarea = ({ className, ...props }: TextareaProps): JSX.Element => {
  return <textarea className={classnames(className, style.textarea)} {...props} />;
};
