import { InputProps } from './Input.props';
import classnames from 'classnames';
import style from './Input.module.css';
import { ForwardedRef, forwardRef } from 'react';

export const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
	return (
		<>
			<input
				className={classnames(className, style.input, {
					[style.error]: error,
				})}
				ref={ref}
				{...props}
			/>
			{error && error.message}
		</>
	);
});
