import React from "react";
import { iconsData } from "./iconsData";

export function Icons() {
  const [wrong, inBetween, success] = iconsData;
  const [displayIcons, setDisplayIcons] = React.useState([]);

  function addIcon(iconStr) {
    if (iconStr === "wrong") {
      setDisplayIcons([...displayIcons, wrong]);
    } else if (iconStr === "in-between") {
      setDisplayIcons([...displayIcons, inBetween]);
    } else if (iconStr === "success") {
      setDisplayIcons([...displayIcons, success]);
    }
  }

  return displayIcons ? (
    <section>
      {displayIcons.map((icon, index) => (
        <ion-icon key={index} class={icon.class} name={icon.name}></ion-icon>
      ))}
    </section>
  ) : null;
}
