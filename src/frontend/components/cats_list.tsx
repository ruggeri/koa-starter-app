import * as React from "react";
import { Cat } from "../types";

export default function CatsList({ cats }: { cats: Cat[] }) {
  const catLis = cats.map((cat) => <li>{cat.firstName}</li>);

  return (
    <ul>
      {catLis}
    </ul>
  );
}
