import React from "react";

export default function CardContent(props) {
  const { question, answer, turnCard } = props;
  const [cardTurn, setCardTurn] = React.useState(false);

  function select(bool) {
    setCardTurn(bool);

    bool ? turnCard(bool) : turnCard(!bool);
  }

  return (
    <React.Fragment>
      <div className="question">
        <p>{question}</p>
        <img
          src="./assets/360_black_24dp.svg"
          alt="rotate card icon"
          onClick={() => {
            select(!cardTurn);
          }}
        />
      </div>
      <div className="answer">
        <p>{answer}</p>
        <div className="wrong">Não lembrei</div>
        <div className="in-between">Quase não lembrei</div>
        <div className="success">Zap!</div>
      </div>
    </React.Fragment>
  );
}
