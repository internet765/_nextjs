import { ProductProps } from "./Product.props";
import classnames from "classnames";
import style from "./Product.module.css";
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { peiceRu } from "../../helpers/helpers";
import { devlOfNumber } from "../../helpers/helpers";
import Image from "next/image";

export const Product = ({ product }: ProductProps): JSX.Element => {
  return (
    <>
      {" "}
      <Card className={style.product}>
        <div className={style.logo}>
          <Image
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            width={70}
            height={70}
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
          {peiceRu(product.credit)} /{" "}
          <span className={style.month}>Ð¼ÐµÑ�Ñ�Ñ†Ñ‹</span>
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
        <div className={style.priceTitle}>Ñ†ÐµÐ½Ð°</div>
        <div className={style.creditTitle}>ÐºÑ€ÐµÐ´Ð¸Ñ‚</div>
        <div className={style.rateTitle}>
          {product.reviewCount}{" "}
          {devlOfNumber(product.reviewCount, ["Ð¾Ñ‚Ð·Ñ‹Ð²", "Ð¾Ñ‚Ð·Ñ‹Ð²Ð°", "Ð¾Ñ‚Ð·Ñ‹Ð²Ð¾Ð²"])}
        </div>
        <div className={style.hrDiv}>
          <hr className={style.hr} />
        </div>
        <div className={style.description}>{product.description}</div>
        <div className={style.feature}>
          {product.characteristics.map((c) => (
            <div key={c.name} className={style.characteristic}>
              <span className={style.characteristicName}>{c.name}</span>
              <span className={style.characteristicDots}></span>
              <span className={style.characteristicValue}>{c.value}</span>
            </div>
          ))}
        </div>
        <div className={style.advBlock}>
          {product.advantages && (
            <div className={style.advantages}>
              <div className={style.advTitle}>ÐŸÑ€ÐµÐ¸Ð¼ÑƒÑ‰ÐµÑ�Ñ‚Ð²Ð°</div>{" "}
              <div>{product.advantages}</div>
            </div>
          )}
          {product.disadvantages && (
            <div className={style.disadvantages}>
              <div className={style.advTitle}>Ð�ÐµÐ´Ð¾Ñ�Ñ‚Ð°Ñ‚ÐºÐ¸</div>{" "}
              <div>{product.disadvantages}</div>
            </div>
          )}
        </div>
        <div className={style.hrDiv}>
          <hr className={classnames(style.hrDiv, style.hr2)} />
        </div>
        <div className={style.actions}>
          <Button apperance={"primary"}>Ð£Ð·Ð½Ð°Ñ‚ÑŒ Ð¿Ð¾Ð´Ñ€Ð¾Ð±Ð½ÐµÐµ</Button>
          <Button
            apperance={"ghost"}
            arrow={"right"}
            className={style.reviewButton}
          >
            Ð§Ð¸Ñ‚Ð°Ñ‚ÑŒ Ð¾Ñ‚Ð·Ñ‹Ð²Ñ‹
          </Button>
        </div>
      </Card>
      <Card
        color='blue'
        className={classnames(style.review, {
          [style.opend]: true,
          [style.closed]: true,
        })}
      >
        <div>ssdd</div>
      </Card>
    </>
  );
};
