import React from "react";
import { HhDataProps } from "./HhData.props";
import classnames from "classnames";
import style from "./HhData.module.css";
import { Card } from "../Card/Card";
import RateIcon from "./rate.svg";
import {peiceRu} from '../../helpers/helpers'

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {

  return (
    <div className={style.hh}>
      <Card className={style.count}>
        <div className={style.title}>Всего вакансий</div>
        <div className={style.countValue}>{count}</div>
      </Card>
      <Card className={style.salary}>
        <div>
          <div className={style.title}>Начальный</div>
          <div className={style.salaryValue}>{peiceRu(juniorSalary)}</div>
          <div className={style.salaryRate}>
            <RateIcon className={style.filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={style.title}>Средний</div>
          <div className={style.salaryValue}>{peiceRu(middleSalary)}</div>
          <div className={style.salaryRate}>
            <RateIcon className={style.filled} />
            <RateIcon className={style.filled} />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={style.title}>Профессионал</div>
          <div className={style.salaryValue}>{peiceRu(seniorSalary)}</div>
          <div className={style.salaryRate}>
            <RateIcon className={style.filled} />
            <RateIcon className={style.filled} />
            <RateIcon className={style.filled} />
          </div>
        </div>
      </Card>
    </div>
  );
};
