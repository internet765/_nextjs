import { TextareaProps } from "./Textarea.props";
import classnames from "classnames";
import { ForwardedRef, forwardRef } from 'react';
import style from "./Textarea.module.css";

export const Textarea = forwardRef(({ className, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  return <textarea className={classnames(className, style.textarea)} ref={ref} {...props} />;
});
