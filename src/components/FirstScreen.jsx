import React from "react";
import Cards from "./cards/index";
import { Footer } from "./Footer";
import { iconsData } from "./iconsData";

export default function FirstScreen() {
  const [wrong, inBetween, success] = iconsData;
  const [displayIcons, setDisplayIcons] = React.useState([]);

  function newIcon(icon) {
    addIcon(icon);
  }
  function addIcon(iconStr) {
    let clonedIcon;

    if (iconStr === "wrong") {
      clonedIcon = { ...wrong };
      setDisplayIcons([...displayIcons, clonedIcon]);
    } else if (iconStr === "in-between") {
      clonedIcon = { ...inBetween };
      setDisplayIcons([...displayIcons, clonedIcon]);
    } else if (iconStr === "success") {
      clonedIcon = { ...success };
      setDisplayIcons([...displayIcons, clonedIcon]);
    }
  }

  return (
    <React.Fragment>
      <header>
        <img src="./assets/logo-pequeno.png" alt="logo zap recall" />
        <h3>ZapRecall</h3>
      </header>
      <Cards newIcon={newIcon}></Cards>
      <Footer icons={displayIcons}></Footer>
    </React.Fragment>
  );
}
