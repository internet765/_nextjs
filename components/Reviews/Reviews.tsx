import { ReviewsProps } from './ReviewsProps.props';
import classnames from 'classnames';
import style from './Reviews.module.css';
import UserIcon from './User.svg';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Rating } from '../Rating/Rating';

export const Reviews = ({
	review,
	className,
	...props
}: ReviewsProps): JSX.Element => {
	const { name, title, description, createdAt, rating } = review;
	return (
		<div className={classnames(style.reviews, className)} {...props}>
			<UserIcon className={style.user} />
			<div className={style.title}>
				<span className={style.name}>{name}</span>&nbsp;&nbsp;
				<span>{title}</span>
			</div>
			<div className={style.date}>
				{format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}
			</div>
			<div className={style.rating}>
				<Rating rating={rating} />
			</div>
			<div className={style.description}>{description}</div>
		</div>
	);
};
