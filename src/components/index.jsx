import React from "react";
import FirstScreen from "./FirstScreen";
import Slider from "./Slider";
import Logo from "./../assets/logo.png";
import { getRandomInt } from "./../utils/index";

export default function Wrapper() {
  const [reactBtnClass, setReactBtnClass] = React.useState("deck-btn");
  const [flagsBtnClass, setFlagsBtnClass] = React.useState("deck-btn");
  const [enableBtn, setEnableBtn] = React.useState(false);
  const [selectedDeck, setSelectedDeck] = React.useState("");
  const [initRecall, setInitRecall] = React.useState(false);
  const [loadScreen, setLoadScreen] = React.useState(false);
  const [scoreGoal, setScoreGoal] = React.useState(1);
  const generatedTimeOut = getRandomInt(1000, 4500);

  function userGoal(value) {
    setScoreGoal(value);
  }

  React.useEffect(() => {
    if (loadScreen) {
      const timeout = setTimeout(() => {
        setLoadScreen(false);
      }, generatedTimeOut);

      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadScreen]);

  React.useEffect(() => {
    if (selectedDeck === "react") {
      setReactBtnClass("deck-btn clicked");
      setFlagsBtnClass("deck-btn opaque");
      setEnableBtn(true);
    } else if (selectedDeck === "flags") {
      setFlagsBtnClass("deck-btn clicked");
      setReactBtnClass("deck-btn opaque");
      setEnableBtn(true);
    }
  }, [selectedDeck]);

  return (
    <React.Fragment>
      {initRecall ? (
        <FirstScreen
          scoreGoal={scoreGoal}
          selectedDeck={selectedDeck}
          hasInitiated={initRecall}
        />
      ) : (
        <div id="nav-screen" className={initRecall ? "hidden" : ""}>
          <figure id="logo">
            <img src={Logo} alt="logo zap recall" />
            <figcaption>ZapRecall</figcaption>
          </figure>
          <div className="deck-selection">
            <p>Escolha um Deck</p>
            <button
              className={reactBtnClass}
              onClick={() => setSelectedDeck("react")}
            >
              React
            </button>
            <button
              className={flagsBtnClass}
              onClick={() => setSelectedDeck("flags")}
            >
              Bandeiras
            </button>
          </div>
          <button
            className={enableBtn ? "" : "opaque"}
            id="begin-btn"
            onClick={() => setInitRecall(!initRecall)}
            disabled={enableBtn ? null : "disabled"}
          >
            Iniciar Recall!
          </button>
          <Slider userGoal={userGoal} />
        </div>
      )}
    </React.Fragment>
  );
}
