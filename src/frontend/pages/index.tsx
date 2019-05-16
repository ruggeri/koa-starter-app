import axios from "axios";
import * as React from "react";
import CatsList from "../components/cats_list";
import { Cat } from "../types";

function Index({ cats }: { cats: Cat[] }): JSX.Element {
  return <CatsList cats={cats}></CatsList>;
}

Index.getInitialProps = async () => {
  const response = await axios.get("http://localhost:3000/api/cats");
  return {
    cats: response.data,
  };
};

export default Index;
