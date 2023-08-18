import { ProductProps } from './Product.props';
import classnames from 'classnames';
import style from './Product.module.css';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { Reviews } from '../Reviews/Reviews';
import { ReviewsForm } from '../ReviewsForm/ReviewsForm';
import { peiceRu } from '../../helpers/helpers';
import { devlOfNumber } from '../../helpers/helpers';
import Image from 'next/image';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const Product = motion(
	forwardRef(({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
		const [isReviewOpend, setIsReviewOpend] = useState<boolean>(false);
		const reviewRef = useRef<null | HTMLDivElement>(null);

		const variants = {
			visible: {
				opacity: 1,
				height: 'auto',
				marginTop: 10
			},
			hidden: {
				opacity: 0,
				height: 0,
			},
		};

		const scrollToReview = () => {
			setIsReviewOpend(true);
			reviewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		};

		return (
			<div className={className} {...props} ref={ref}>
				{' '}
				<Card className={style.product}>
					<div className={style.logo}>
						<Image src={process.env.NEXT_PUBLIC_DOMAIN + product.image} width={70} height={70} alt={product.title} />
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
						{peiceRu(product.credit)} / <span className={style.month}>мес</span>
					</div>
					<div className={style.rating}>
						<Rating rating={product.reviewAvg ?? product.initialRate} />
					</div>
					<div className={style.tags}>
						{product.categories.map((c) => (
							<Tag key={c} className={style.category} color={'ghost'}>
								{c}
							</Tag>
						))}
					</div>
					<div className={style.priceTitle}>цена</div>
					<div className={style.creditTitle}>в кредит</div>
					<div className={style.rateTitle}>
						<a href='#ref' onClick={scrollToReview}>
							{product.reviewCount} {devlOfNumber(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
						</a>
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
								<div className={style.advTitle}>Преимущества</div> <div>{product.advantages}</div>
							</div>
						)}
						{product.disadvantages && (
							<div className={style.disadvantages}>
								<div className={style.advTitle}>Недостатки</div> <div>{product.disadvantages}</div>
							</div>
						)}
					</div>
					<div className={style.hrDiv}>
						<hr className={classnames(style.hrDiv, style.hr2)} />
					</div>
					<div className={style.actions}>
						<Button apperance={'primary'}>Узнать подробнее</Button>
						<Button apperance={'ghost'} arrow={isReviewOpend ? 'right' : 'down'} className={style.reviewButton} onClick={() => setIsReviewOpend(!isReviewOpend)}>
							Читать отзывы
						</Button>
					</div>
				</Card>
				<motion.div variants={variants} initial={'hidden'} animate={isReviewOpend ? 'visible' : 'hidden'}>
					<Card color='blue' className={classnames(style.reviews)} ref={reviewRef}>
						{product.reviews.map((r) => (
							<div key={r._id}>
								<Reviews review={r} />
								<hr />
							</div>
						))}
						<ReviewsForm productId={product._id} />
					</Card>
				</motion.div>
			</div>
		);
	})
);
