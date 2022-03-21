import React from "react";
import { Card } from "./Card";
import { decksData } from "./decksData";
import { shuffleArray } from "../../utils/index";

export default function Cards(props) {
  const { newIcon, restartRecall, selectedDeck, hasInitiated, numToCompare } =
    props;
  const [reactDeck, flagsDeck] = decksData;
  const [newEntry, setNewEntry] = React.useState("");
  const [startedRecall, setStartedRecall] = React.useState(0);
  const [deckOfCards, setDeckOfCards] = React.useState([]);
  const [countTurnedCards, setCountTurnedCards] = React.useState(0);

  function callback(icon) {
    if (!restartRecall) setNewEntry(icon);
  }

  function addTurnedCard() {
    setCountTurnedCards(countTurnedCards + 1);
    numToCompare(countTurnedCards);
  }

  React.useEffect(() => {
    if (hasInitiated && startedRecall <= 0) {
      setStartedRecall(startedRecall + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasInitiated]);

  React.useEffect(() => {
    if (startedRecall === 1) {
      if (selectedDeck === "react") {
        setDeckOfCards(shuffleArray([...reactDeck]));
      } else if (selectedDeck === "flags") {
        setDeckOfCards(shuffleArray([...flagsDeck]));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startedRecall]);

  React.useEffect(() => {
    if (newEntry.length > 0) {
      newIcon(newEntry);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newEntry]);

  return (
    <main>
      {deckOfCards.map((card, index) => (
        <Card
          key={index}
          number={index + 1}
          question={card.question}
          imageUrl={card.imageUrl}
          answer={card.answer}
          restartRecall={restartRecall}
          callback={callback}
          addTurnedCard={addTurnedCard}
        />
      ))}
    </main>
  );
}
