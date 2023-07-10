import { SearchProps } from "./Search.props";
import classnames from "classnames";
import style from "./Search.module.css";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import SearchIcon from "./Search.svg";
import { useState } from "react";
import { useRouter } from "next/router";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const goToSerarch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      goToSerarch();
    }
  };

  return (
    <div className={classnames(className, style.search)} {...props}>
      <Input
        placeholder='Поиск...'
        onChange={(e) => setSearch(e.target.value)}
        className={style.input}
        value={search}
        onKeyDown={handleKeyDown}
      />
      <Button
        apperance='primary'
        className={style.button}
        onClick={goToSerarch}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};
