import { SortEnum, SortProps } from "./Sort.props";
import classnames from "classnames";
import style from "./Sort.module.css";
import SortIcon from "./Sort.svg";

export const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element => {
  return (
    <div className={classnames(style.sort, className)} {...props}>
      <span onClick={()=> setSort(SortEnum.Rating)} className={classnames({[style.active]: sort === SortEnum.Rating})}>
        <SortIcon  className={style.sortIcon} />
        По рейтингу
      </span>
      <span onClick={()=> setSort(SortEnum.Price)} className={classnames({[style.active]: sort === SortEnum.Price})}>
        <SortIcon className={style.sortIcon}/>
        По цене
      </span>
    </div>
  );
};
