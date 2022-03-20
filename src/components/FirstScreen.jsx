import React from "react";
import Cards from "./cards/Cards";
import Logo from "./../assets/logo.png";
import SmallLogo from "./../assets/logo-pequeno.png";
import { Footer } from "./Footer";
import { iconsData } from "./iconsData";
import { cardsData } from "./cards/cardsData";
import { getRandomInt } from "./../utils/index";

export default function FirstScreen(props) {
  const { scoreGoal } = props;
  const [wrong, inBetween, success] = iconsData;
  const [displayIcons, setDisplayIcons] = React.useState([]);
  const [reloadComponent, setReloadComponent] = React.useState(false);
  const [loadScreen, setLoadScreen] = React.useState(false);
  const [countScore, setCountScore] = React.useState(0);

  const generatedTimeOut = getRandomInt(1000, 4500);

  React.useEffect(() => {
    if (reloadComponent) {
      setDisplayIcons([]);
      setCountScore(0);
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
        clonedIcon = { ...wrong };
        setDisplayIcons([...displayIcons, clonedIcon]);
      } else if (iconStr === "in-between") {
        clonedIcon = { ...inBetween };
        setDisplayIcons([...displayIcons, clonedIcon]);
      } else if (iconStr === "success") {
        clonedIcon = { ...success };
        setCountScore(countScore + 1);
        setDisplayIcons([...displayIcons, clonedIcon]);
      }
    }
  }

  function loadScreenAnimation() {
    setLoadScreen(true);
  }

  function restartPage() {
    setReloadComponent(true);
  }

  return (
    <div id="first-screen">
      {loadScreen ? (
        <>
          <img id="loading-img" src={Logo} alt="" />
        </>
      ) : (
        <>
          <header>
            <img src={SmallLogo} alt="logo zap recall" />
            <h3>ZapRecall</h3>
          </header>
          <Cards newIcon={newIcon} restartRecall={reloadComponent}></Cards>
          <Footer
            icons={displayIcons}
            perfectScore={countScore >= scoreGoal}
            callback={restartPage}
            loadScreenAnimation={loadScreenAnimation}
            generatedTimeOut={generatedTimeOut}
          ></Footer>
        </>
      )}
    </div>
  );
}
