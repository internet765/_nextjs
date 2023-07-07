import React from "react";
import { TopPageComponentProps } from "./TopPageComponent.props";
import { Htag, Tag, HhData, Advantages, P } from "../../components";
import style from "./TopPageComponent.module.css";
import { TopLevelGategory } from "../../interfaces/page.interface";

function TopPageComponent({
  products,
  firstCategory,
  page,
}: TopPageComponentProps): JSX.Element {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <Htag tag='h1'>{page.title}</Htag>
        <Tag color='grey' size='middle'>
          {products && products.length}
        </Tag>
        <span>Сортировка</span>
      </div>
      <div>
      {products && products.map(p=>(
        <div key={p._id}>{p.title}</div>
      ))}
      </div>
      <div className={style.hhTitle}>
        <Htag tag='h2'>Вакансии - {page.category}</Htag>
        <Tag color='red' size='middle'>hh.ru</Tag>
      </div>
      {firstCategory === TopLevelGategory.Courses && page.hh && <HhData {...page.hh}/>}
      {page.advantages && page.advantages.length > 0 && <>
        <Htag tag='h2'>Приемущества</Htag>
        <Advantages advantages={page.advantages}/>
      </>}
      {page.seoText && <P>{page.seoText}</P>}
      <Htag tag='h2'>Получаемые навыки</Htag>
      {page.tags.map(t => (<Tag color="primary" key={t}>{t}</Tag>))}
    </div>
  );
}

export default TopPageComponent;
