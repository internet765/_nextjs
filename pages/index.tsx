import { Button, Htag, P } from "./components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Привет</Htag>
      <Htag tag="h2">Привет</Htag>
      <Htag tag="h3">Привет</Htag>

      <P size={"low"}>low</P>
      <P size={"middle"}>middle</P>
      <P size={"heigh"}>heigh</P>

      <Button apperance="primary" arrow="down" onClick={() => console.log(0)}>
        Пока
      </Button>
      <Button apperance="ghost" arrow="right">
        Пока
      </Button>
    </div>
  );
}
