import axios from "axios";
import * as React from "react";
import CatsList from "../components/cats_list";
import { Cat } from "../types";

interface IndexProps {
  cats: Cat[];
}

function Index({ cats }: IndexProps): JSX.Element {
  return <CatsList cats={cats}></CatsList>;
}

Index.getInitialProps = async (): Promise<IndexProps> => {
  const response = await axios.get("http://localhost:3000/api/cats");
  return {
    cats: response.data,
  };
};

export default Index;
