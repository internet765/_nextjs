import classnames from 'classnames';
import style from './Menu.module.css';
import React, { useContext } from 'react';
import Link from 'next/link';
import { firstLevelMenu } from '../../helpers/helpers';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	const router = useRouter();

	const variants = {
		visible: {
			transition: {
				marginBottom: 20,
				when: 'beforeChildren',
				staggerChildren: 0.1,
			},
		},
		hidden: { marginBottom: 0 },
	};

	const variantsChildren = {
		visible: {
			opacity: 1,
      height: 29
		},
		hidden: { opacity: 0, height: 0 },
	};

	const openSecondLevel = (secondCategory: string) => {
		setMenu &&
			setMenu(
				menu.map((m) => {
					if (m._id.secondCategory == secondCategory) {
						m.isOpened = !m.isOpened;
					}
					return m;
				})
			);
	};

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map((m) => (
					<div key={m.route}>
						<Link href={`/${m.route}`}>
							<a>
								<div
									className={classnames(style.firstLevel, {
										[style.firstLevelActive]: m.id == firstCategory,
									})}
								>
									{m.icon}
									<span>{m.name}</span>
								</div>
							</a>
						</Link>
						{m.id == firstCategory && buildSecondLevel(m)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={style.secondBlock}>
				{menu.map((m) => {
					if (m.pages.map((p) => p.alias).includes(router.asPath.split('/')[2])) {
						m.isOpened = true;
					}
					return (
						<div key={m._id.secondCategory}>
							<div className={style.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>
								{m._id.secondCategory}
							</div>
							<motion.div
								layout
								variants={variants}
								initial={m.isOpened ? 'visible' : 'hidden'}
								animate={m.isOpened ? 'visible' : 'hidden'}
								className={classnames(style.secondLevelBlock)}
							>
								{buildThirdLevel(m.pages, menuItem.route)}
							</motion.div>
						</div>
					);
				})}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return pages.map((p) => (
			<motion.div key={p._id} variants={variantsChildren}>
				<Link href={`/${route}/${p.alias}`}>
					<a
						className={classnames(style.thirdLevel, {
							[style.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath,
						})}
					>
						{p.category}
					</a>
				</Link>
			</motion.div>
		));
	};

	return <div className={style.menu}>{buildFirstLevel()}</div>;
};
