import axios from "axios";
import * as React from "react";
// import { Cat } from "../../models/cat";
import CatsList from "../components/cats_list";

function Index({ cats }: { cats: { firstName: string }[] }) {
  return <CatsList cats={cats}></CatsList>;
}

Index.getInitialProps = async () => {
  const response = await axios.get("http://localhost:3000/api/cats");
  return {
    cats: response.data,
  };
};

export default Index;
