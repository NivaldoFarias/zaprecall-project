import React from "react";
import Cards from "./cards/Cards";
import Logo from "./../assets/logo.png";
import SmallLogo from "./../assets/logo.png";
import { Footer } from "./Footer";
import { iconsData } from "./iconsData";
import { decksData } from "./cards/decksData";
import { getRandomInt } from "./../utils/index";

export default function FirstScreen(props) {
  const { scoreGoal, selectedDeck, hasInitiated } = props;
  const [wrong, inBetween, success] = iconsData;
  const [displayIcons, setDisplayIcons] = React.useState([]);
  const [reloadComponent, setReloadComponent] = React.useState(false);
  const [loadScreen, setLoadScreen] = React.useState(false);
  const [countScore, setCountScore] = React.useState(0);
  const [numOfTurnedCards, setNumOfTurnedCards] = React.useState(0);

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
    let clonedIcon;

    if (displayIcons.length <= decksData[0].length) {
      if (icon === "wrong") {
        clonedIcon = { ...wrong };
        setDisplayIcons([...displayIcons, clonedIcon]);
      } else if (icon === "in-between") {
        clonedIcon = { ...inBetween };
        setDisplayIcons([...displayIcons, clonedIcon]);
      } else if (icon === "success") {
        clonedIcon = { ...success };
        setCountScore(countScore + 1);
        setDisplayIcons([...displayIcons, clonedIcon]);
      }
    }
  }

  function numToCompare(num) {
    setNumOfTurnedCards(num);
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
        <div className="loading-screen">
          <img id="loading-img" src={Logo} alt="Logo ZapRecall" />
          <h3>Carregando...</h3>
        </div>
      ) : (
        <>
          <header>
            <img src={SmallLogo} alt="logo zap recall" />
            <h3>ZapRecall</h3>
          </header>
          <Cards
            newIcon={newIcon}
            restartRecall={reloadComponent}
            selectedDeck={selectedDeck}
            hasInitiated={hasInitiated}
            numToCompare={numToCompare}
          ></Cards>
          <Footer
            icons={displayIcons}
            perfectScore={countScore >= scoreGoal}
            callback={restartPage}
            loadScreenAnimation={loadScreenAnimation}
            generatedTimeOut={generatedTimeOut}
            numOfTurnedCards={numOfTurnedCards}
          ></Footer>
        </>
      )}
    </div>
  );
}
