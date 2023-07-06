import { CardProps } from "./CardProps.props";
import classnames from "classnames";
import style from "./Card.module.css";

export const Card = ({
  color = "white",
  children,
  className,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div
      className={classnames(style.card, className, {
        [style.blue]: color === "blue",
      })}
      {...props}
    >
      {children}
    </div>
  );
};
