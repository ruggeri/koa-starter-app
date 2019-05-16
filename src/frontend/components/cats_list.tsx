import * as React from "react";
// import { Cat } from "../../models/cat";

export default function CatsList({ cats }: { cats: { firstName: string }[] }) {
  const catLis = cats.map((cat) => <li>{cat.firstName}</li>);

  return (
    <ul>
      {catLis}
    </ul>
  );
}
