import React from "react";
import CardContent from "./CardContent";
import { iconsData } from "./../iconsData";

export function Card(props) {
  const { number, question, answer, callback, restartRecall } = props;
  const [showCard, setShowCard] = React.useState(false);
  const [cardTurned, setCardTurned] = React.useState("");
  const [answerData, setAnswerData] = React.useState("");
  const iconsArray = iconsData.map((icon) => {
    return <ion-icon class={icon.class} name={icon.name}></ion-icon>;
  });

  iconsArray.push(
    <ion-icon
      class="play-btn"
      name="play-outline"
      onClick={() => setShowCard(!showCard)}
    ></ion-icon>
  );
  const [wrong, inBetween, success, defaultIcon] = iconsArray;
  const [loadedIcon, setLoadedIcon] = React.useState(defaultIcon);
  const [textColor, setTextColor] = React.useState("");

  function loadIcon(icon) {
    setTextColor(`${icon}-text`);
    if (icon === "wrong") {
      setLoadedIcon(wrong);
    } else if (icon === "in-between") {
      setLoadedIcon(inBetween);
    } else if (icon === "success") {
      setLoadedIcon(success);
    } else {
      setLoadedIcon(defaultIcon);
    }
  }

  function turnCard(bool) {
    if (bool) {
      setCardTurned("turned");
    } else {
      setCardTurned("");
    }
  }
  function returnCardDefault(valueStr) {
    setShowCard(false);
    setCardTurned("");
    setAnswerData(valueStr);
    loadIcon(valueStr);
  }

  React.useEffect(() => {
    callback(answerData);
    console.log(number, answerData);
  }, [callback, answerData, restartRecall]);

  React.useEffect(() => {
    if (restartRecall) returnCardDefault();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restartRecall]);

  return (
    <article className={showCard ? `card ${cardTurned}` : "display"}>
      {showCard ? (
        <CardContent
          question={question}
          answer={answer}
          turnCard={turnCard}
          returnCardDefault={returnCardDefault}
        />
      ) : (
        <React.Fragment>
          <p className={textColor}>Pergunta {number}</p>
          {loadedIcon}
        </React.Fragment>
      )}
    </article>
  );
}
