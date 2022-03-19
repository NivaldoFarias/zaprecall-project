import React from "react";
import Cards from "./cards/Cards";
import ZapRecall from "./../assets/logo.png";
import { Footer } from "./Footer";
import { iconsData } from "./iconsData";
import { cardsData } from "./cards/cardsData";

export default function FirstScreen() {
  const [wrong, inBetween, success] = iconsData;
  const [displayIcons, setDisplayIcons] = React.useState([]);
  const [perfectScore, setPerfectScore] = React.useState(true);
  const [reloadComponent, setReloadComponent] = React.useState(false);
  const [loadScreen, setLoadScreen] = React.useState(false);

  const generatedTimeOut = randomTimeOut(1000, 4500);

  React.useEffect(() => {
    if (reloadComponent) {
      setDisplayIcons([]);
      setPerfectScore(true);
      setReloadComponent(false);
    }
  }, [reloadComponent]);

  React.useEffect(() => {
    if (loadScreen) {
      const timeout = setTimeout(() => {
        setLoadScreen(false);
      }, generatedTimeOut);

      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadScreen]);

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

  function randomTimeOut(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function loadScreenAnimation() {
    setLoadScreen(true);
  }

  function restartPage() {
    setReloadComponent(true);
  }

  return (
    <>
      {loadScreen ? (
        <>
          <img id="loading-img" src={ZapRecall} alt="" />
        </>
      ) : (
        <>
          <header>
            <img src="./assets/logo-pequeno.png" alt="logo zap recall" />
            <h3>ZapRecall</h3>
          </header>
          <Cards newIcon={newIcon} restartRecall={reloadComponent}></Cards>
          <Footer
            icons={displayIcons}
            perfectScore={perfectScore}
            callback={restartPage}
            loadScreenAnimation={loadScreenAnimation}
            generatedTimeOut={generatedTimeOut}
          ></Footer>
        </>
      )}
    </>
  );
}
