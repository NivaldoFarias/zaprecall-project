import React from "react";
import { Card } from "./Card";
import { cardsData } from "./cardsData";

export default function Cards(props) {
  const { newIcon } = props;
  const [newEntry, setNewEntry] = React.useState("");

  function callback(icon) {
    setNewEntry(icon);
  }

  React.useEffect(() => {
    if (newEntry.length > 0) {
      console.log(newEntry);
    }
  });

  return (
    <main>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          number={card.number}
          question={card.question}
          answer={card.answer}
          callback={callback}
        />
      ))}
    </main>
  );
}
