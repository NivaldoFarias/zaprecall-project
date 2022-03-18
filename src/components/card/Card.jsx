import React from "react";
import CardContent from "./CardContent";

export function Card(props) {
  const { number, question, answer } = props;
  const [showCard, setShowCard] = React.useState(false);
  const [cardTurned, setCardTurned] = React.useState("");
  const [answerData, setAnswerData] = React.useState("");

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
  }

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
          <p>Pergunta {number}</p>
          <ion-icon
            name="play-outline"
            onClick={() => setShowCard(!showCard)}
          ></ion-icon>
        </React.Fragment>
      )}
    </article>
  );
}
