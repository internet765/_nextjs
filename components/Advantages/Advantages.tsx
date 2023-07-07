import React from "react";
import { AdvantagesProps } from "./Advantages.props";
import classnames from "classnames";
import style from "./Advantages.module.css";
import Ckeck from "./check.svg";

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  console.log(advantages);
  
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={style.advantage}>
          <Ckeck />
          <div className={style.title}>{a.title}</div>
          <hr className={style.vline} />
          <div className={style.description}>{a.deccription}</div>
        </div>
      ))}
    </>
  );
};
