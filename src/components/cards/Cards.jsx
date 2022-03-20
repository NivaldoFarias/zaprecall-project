import React from "react";
import { Card } from "./Card";
import { cardsData } from "./cardsData";
import { shuffleArray } from "../../utils/index";

export default function Cards(props) {
  const { newIcon, restartRecall } = props;
  const [newEntry, setNewEntry] = React.useState("");
  const cards = shuffleArray(cardsData);

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
