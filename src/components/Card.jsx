import React from "react";
import CardContent from "./CardContent";

export function Card(props) {
  const { number, question, answer } = props;
  const [showCard, setShowCard] = React.useState(false);
  const [cardTurned, setCardTurned] = React.useState(false);

  function turnCard(bool) {
    setCardTurned(bool);
  }

  return (
    <article className={showCard ? "paper-bg" : ""}>
      <div className={showCard ? "card" : "display"}>
        {showCard ? (
          <CardContent question={question} answer={answer} />
        ) : (
          <React.Fragment>
            <p>Pergunta {number}</p>
            <ion-icon
              name="play-outline"
              onClick={() => setShowCard(!showCard)}
              turnCard={turnCard}
            ></ion-icon>
          </React.Fragment>
        )}
      </div>
    </article>
  );
}
