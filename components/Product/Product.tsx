import { ProductProps } from "./Product.props";
import classnames from "classnames";
import style from "./Product.module.css";
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { peiceRu } from "../../helpers/helpers";
import { devlOfNumber } from "../../helpers/helpers";

export const Product = ({
  product,
  children,
  className,
  ...props
}: ProductProps): JSX.Element => {
  return (
    <Card className={style.product}>
      <div className={style.logo}>
        <img
          src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
          alt={product.title}
        />
      </div>
      <div className={style.title}>{product.title}</div>
      <div className={style.price}>
        {peiceRu(product.price)}
        {product.oldPrice && (
          <Tag className={style.oldPrice} color='green'>
            {peiceRu(product.price - product.oldPrice)}
          </Tag>
        )}
      </div>
      <div className={style.credit}>
        {peiceRu(product.credit)} / <span className={style.month}>месяцы</span>
      </div>
      <div className={style.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRate} />
      </div>
      <div className={style.tags}>
        {product.categories.map((c) => (
          <Tag key={c} className={style.category} color={"ghost"}>
            {c}
          </Tag>
        ))}
      </div>
      <div className={style.priceTitle}>цена</div>
      <div className={style.creditTitle}>кредит</div>
      <div className={style.rateTitle}>
        {product.reviewCount}{" "}
        {devlOfNumber(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
      </div>
      <div className={style.hrDiv}>
        <hr className={style.hr} />
      </div>
      <div className={style.description}>{product.description}</div>
      <div className={style.feature}>фичи</div>
      <div className={style.advBlock}>
        {product.advantages && (
          <div className={style.advantages}>
            <div className={style.advTitle}>Преимущества</div>{" "}
            <div>{product.advantages}</div>
          </div>
        )}
        {product.disadvantages && (
          <div className={style.disadvantages}>
            <div className={style.advTitle}>Недостатки</div>{" "}
            <div>{product.disadvantages}</div>
          </div>
        )}
      </div>
      <div className={style.hrDiv}>
        <hr className={style.hr} />
      </div>
      <div className={style.actions}>
        <Button apperance={"primary"}>Узнать подробнее</Button>
        <Button
          apperance={"ghost"}
          arrow={"right"}
          className={style.reviewButton}
        >
          Читать отзывы
        </Button>
      </div>
    </Card>
  );
};
