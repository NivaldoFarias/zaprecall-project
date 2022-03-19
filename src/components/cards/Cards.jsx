import React from "react";
import { Card } from "./Card";
import { cardsData } from "./cardsData";

export default function Cards(props) {
  const { newIcon, restartRecall } = props;
  const [newEntry, setNewEntry] = React.useState("");

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
      {cardsData.map((card, index) => (
        <Card
          key={index}
          number={card.number}
          question={card.question}
          answer={card.answer}
          restartRecall={restartRecall}
          callback={callback}
        />
      ))}
    </main>
  );
}
