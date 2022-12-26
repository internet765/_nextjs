import React, { useState } from "react";
import { GetStaticProps } from "next";
import { Button, Htag, P, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <div className="container">
      <Htag tag="h1">Привет</Htag>
      <Htag tag="h2">Привет</Htag>
      <Htag tag="h3">Привет</Htag>

      <P size={"low"}>low</P>
      <P size={"middle"}>middle</P>
      <P size={"heigh"}>heigh</P>

      <Tag size={"low"} color={"ghost"}>
        ghost
      </Tag>
      <Tag size={"middle"} color={"green"}>
        green
      </Tag>
      <Tag size={"middle"} color={"red"}>
        red
      </Tag>

      <Button apperance="primary" arrow="down" onClick={() => console.log(0)}>
        Пока
      </Button>
      <Button apperance="ghost" arrow="right">
        Пока
      </Button>

      <Rating rating={rating} isEditeble setRating={setRating} />

      {menu.map((m) => (
        <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
      ))}
    </div>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

export interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
