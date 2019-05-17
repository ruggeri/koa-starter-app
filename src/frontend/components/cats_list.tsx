import * as React from "react";
import { Cat } from "../types";

export default function CatsList({ cats }: { cats: Cat[] }): JSX.Element {
  const catLis = cats.map((cat): JSX.Element => <li key={cat.id}>{cat.firstName}</li>);

  return (
    <ul>
      {catLis}
    </ul>
  );
}
