import React from "react";
import { Icons } from "./Icons";

export function Footer(props) {
  const { icons } = props;

  return (
    <footer>
      <p>0/4 CONCLUÍDOS</p>
      {icons ? <Icons icons={icons} /> : null}
    </footer>
  );
}
