import { CardProps } from './CardProps.props';
import classnames from 'classnames';
import style from './Card.module.css';
import { forwardRef, ForwardedRef } from 'react';
import { motion } from "framer-motion";

export const Card = motion(forwardRef(({ color = 'white', children, className, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	return (
		<div
			className={classnames(style.card, className, {
				[style.blue]: color === 'blue',
			})}
			{...props}
			ref={ref}
		>
			{children}
		</div>
	);
}));
