import { Card } from "./Card";
import { cardsData } from "./cardsData";

export default function Cards() {
  return (
    <main>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          number={card.number}
          question={card.question}
          answer={card.answer}
        />
      ))}
    </main>
  );
}
