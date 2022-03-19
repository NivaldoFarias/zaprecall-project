import React from "react";
import Cards from "./cards/index";
import { Footer } from "./Footer";
import { iconsData } from "./iconsData";
import { cardsData } from "./cards/cardsData";

export default function FirstScreen() {
  const [wrong, inBetween, success] = iconsData;
  const [displayIcons, setDisplayIcons] = React.useState([]);
  const [perfectScore, setPerfectScore] = React.useState(true);
  const [reloadComponent, setReloadComponent] = React.useState(false);

  function restartPage() {
    setReloadComponent(true);
  }
  React.useEffect(() => {
    if (reloadComponent) {
      setDisplayIcons([]);
      setPerfectScore(true);
      setReloadComponent(false);
    }
  }, [reloadComponent]);

  function newIcon(icon) {
    addIcon(icon);
  }

  function addIcon(iconStr) {
    let clonedIcon;

    if (displayIcons.length <= cardsData.length) {
      if (iconStr === "wrong") {
        setPerfectScore(false);
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
  }

  return (
    <React.Fragment>
      <header>
        <img src="./assets/logo-pequeno.png" alt="logo zap recall" />
        <h3>ZapRecall</h3>
      </header>
      <Cards newIcon={newIcon} restartRecall={reloadComponent}></Cards>
      <Footer
        icons={displayIcons}
        perfectScore={perfectScore}
        callback={restartPage}
      ></Footer>
    </React.Fragment>
  );
}
