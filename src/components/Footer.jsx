import React from "react";
import { Icons } from "./Icons";
import { cardsData } from "./cards/cardsData";
import PartyEmoji from "./../assets/party.png";
import SadEmoji from "./../assets/sad.png";

export function Footer(props) {
  const {
    icons,
    perfectScore,
    callback,
    loadScreenAnimation,
    generatedTimeOut,
  } = props;
  const [restartRecall, setRestartRecall] = React.useState(false);
  const [btnClick, setBtnCLick] = React.useState("");
  const numOfCards = cardsData.length,
    numOfIcons = icons.length;

  const isComplete = numOfIcons === numOfCards;
  const resultsTitle = perfectScore ? "Parabéns!" : "Putz...";
  const resultsText = perfectScore
    ? "Você não esqueceu de nenhum flashcard!"
    : `Ainda faltam alguns... Mas não desanime!`;
  const emoji = perfectScore ? PartyEmoji : SadEmoji;

  React.useEffect(() => {
    if (restartRecall) {
      callback();
      setBtnCLick("clicked");

      const timeout = setTimeout(() => {
        setBtnCLick("");
        setRestartRecall(false);
      }, generatedTimeOut);

      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restartRecall]);

  React.useEffect(() => {
    if (btnClick === "clicked") {
      loadScreenAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [btnClick]);

  return (
    <footer className={isComplete ? "show-results" : ""}>
      {isComplete ? (
        <div className="results">
          <figure className="results__title">
            <img src={emoji} alt="emoji" />
            <figcaption>{resultsTitle}</figcaption>
          </figure>
          <p className="results__text">{resultsText}</p>
        </div>
      ) : null}
      <p>
        {numOfIcons}/{numOfCards} CONCLUÍDOS
      </p>
      {icons ? <Icons icons={icons} /> : null}
      {isComplete ? (
        <button
          id="restart-btn"
          className={btnClick}
          onClick={() => setRestartRecall(!restartRecall)}
        >
          REINICIAR RECALL
        </button>
      ) : null}
    </footer>
  );
}
