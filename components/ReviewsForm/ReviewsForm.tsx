import { ReviewsFormProps } from './ReviewsFormProps.props';
import classnames from 'classnames';
import style from './ReviewsForm.module.css';
import CloseIcon from './close.svg';
import { Rating } from '../Rating/Rating';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { useForm, Controller } from 'react-hook-form';
import { IReviewsForm } from './ReviewsForm.interface';

export const ReviewsForm = ({
	productId,
	className,
	...props
}: ReviewsFormProps): JSX.Element => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IReviewsForm>();

	const onSubmit = (data: IReviewsForm) => {
		
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={classnames(style.reviewsForm, className)} {...props}>
				<Input
					{...register('name', {
						required: { value: true, message: 'Заполните им' },
					})}
					placeholder={'Им'}
					error={errors.name}
				/>
				<Input
					{...register('title')}
					className={style.title}
					placeholder={'Текст'}
				/>

				<div className={style.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name='rating'
						rules={{ required: { value: true, message: 'Заполните быстро!' } }}
						render={({ field }) => (
							<Rating
								isEditeble
								rating={field.value}
								setRating={field.onChange}
								ref={field.ref}
								error={errors.rating}
							/>
						)}
					/>
				</div>
				<Textarea {...register('description')} className={style.description} />
				<div className={style.submite}>
					<Button apperance='primary'>Отправить</Button>
					<span className={style.info}>
						* Перед публикацией отзыв пройдет предварительную модерацию и
						проверку
					</span>
				</div>
			</div>
			<div className={style.success}>
				<div className={style.successTitle}>Ваш отзыв отправлен</div>
				<div>Спасибо!</div>
				<CloseIcon className={style.close} />
			</div>
		</form>
	);
};
