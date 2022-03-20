import React from "react";
import { Card } from "./Card";
import { decksData } from "./decksData";
import { shuffleArray } from "../../utils/index";

export default function Cards(props) {
  const { newIcon, restartRecall, selectedDeck } = props;
  const [reactDeck, flagsDeck] = decksData;
  const [newEntry, setNewEntry] = React.useState("");

  let cards;
  if (selectedDeck === "react") {
    cards = shuffleArray([...reactDeck]);
  } else if (selectedDeck === "flags") {
    cards = shuffleArray([...flagsDeck]);
  }

  function callback(icon) {
    if (!restartRecall) {
      setNewEntry(icon);
    }
  }

  React.useEffect(() => {
    if (newEntry.length > 0) {
      newIcon(newEntry);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newEntry]);

  return (
    <main>
      {cards.map((card, index) => (
        <Card
          key={index}
          number={index + 1}
          question={card.question}
          answer={card.answer}
          restartRecall={restartRecall}
          callback={callback}
        />
      ))}
    </main>
  );
}
