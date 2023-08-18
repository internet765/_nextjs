import { ButtonProps } from './ButtonProps';
import ArrowIcon from './arrow.svg';
import classnames from 'classnames';
import style from './Button.module.css';
import { motion } from 'framer-motion';
import { ForwardedRef, forwardRef } from 'react';

export const Button = motion(
	forwardRef(({ apperance, arrow = 'none', children, className, ...props }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>): JSX.Element => {
		return (
			<button
				className={classnames(style.button, className, {
					[style.primary]: apperance === 'primary',
					[style.ghost]: apperance === 'ghost',
				})}
        ref={ref}
				{...props}
			>
				{children}
				{arrow !== 'none' && (
					<span className={classnames(style.arrow, { [style.down]: arrow === 'down' })}>
						<ArrowIcon />
					</span>
				)}
			</button>
		);
	})
);
