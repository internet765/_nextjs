import React, { useState } from "react";
import { Button, Htag, P, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <div className="container">
      <Htag tag="h1">Привет</Htag>
      <Htag tag="h2">Привет</Htag>
      <Htag tag="h3">Привет</Htag>

      <P size={"low"}>low</P>
      <P size={"middle"}>middle</P>
      <P size={"heigh"}>heigh</P>

      <Tag size={"low"}  color={"ghost"}>ghost</Tag>
      <Tag size={"middle"} color={"green"}>green</Tag>
      <Tag size={"middle"} color={"red"}>red</Tag>

      <Button apperance="primary" arrow="down" onClick={() => console.log(0)}>
        Пока
      </Button>
      <Button apperance="ghost" arrow="right">
        Пока
      </Button>

      <Rating rating={rating} isEditeble setRating={setRating}/>

    </div>
  );
}

export default withLayout(Home);
