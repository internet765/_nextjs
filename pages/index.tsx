import { Button, Htag } from "./components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Привет</Htag>
      <Button apperance="primary">Пока</Button>
      <Button apperance="ghost">Пока</Button>
    </div>
  );
}
