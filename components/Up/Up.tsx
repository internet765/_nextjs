import { motion, useAnimation } from 'framer-motion';
import { useScrollY } from '../../hooks/useScrollY';
import { Button } from '../Button/Button';
import style from './Up.module.css';
import { useEffect } from 'react';

export const Up = (): JSX.Element => {
	const controls = useAnimation();

	const y = useScrollY();

	useEffect(() => {
		controls.start({ opacity: y / document.body.scrollHeight });
	}, [y, controls]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<Button apperance='primary' animate={controls} initial={{ opacity: 0 }} className={style.up} onClick={scrollToTop}>
			Вверх
		</Button>
	);
};
