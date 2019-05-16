import * as React from "react";

export default function CatsList() {
  const [cats, setCats] = React.useState(() => {
    return [{ name: "Gizmo" }];
  });

  const catLis = cats.map((cat) => <li>{cat.name}</li>);

  return (
    <ul>
      {catLis}
    </ul>
  );
}
