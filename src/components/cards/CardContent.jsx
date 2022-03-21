import React from "react";
import RotateIcon from "./../../assets/360_black_24dp.svg";

export default function CardContent(props) {
  const { question, imageUrl, answer, turnCard, returnToCardDefault } = props;
  const [cardTurn, setCardTurn] = React.useState(false);
  const [returnDefault, setReturnDefault] = React.useState(false);

  function select(bool) {
    setCardTurn(bool);

    bool ? turnCard(bool) : turnCard(!bool);
  }
  function cardDefault(bool, valueStr) {
    setReturnDefault(bool);
    returnToCardDefault(valueStr);
  }

  return (
    <React.Fragment>
      <div className="question">
        {question ? (
          <p>{question}</p>
        ) : (
          <img
            className="flag"
            src={Object.values(imageUrl).toString()}
            alt="bandeira"
          ></img>
        )}
        <img
          src={RotateIcon}
          alt="rotate card icon"
          className="rotate-card-icon"
          onClick={() => {
            select(!cardTurn);
          }}
        />
      </div>
      <div className="answer">
        <p>{answer}!</p>
        <div
          className="wrong"
          onClick={() => cardDefault(!returnDefault, "wrong")}
        >
          Não lembrei
        </div>
        <div
          className="in-between"
          onClick={() => cardDefault(!returnDefault, "in-between")}
        >
          Quase não lembrei
        </div>
        <div
          className="success"
          onClick={() => cardDefault(!returnDefault, "success")}
        >
          Zap!
        </div>
      </div>
    </React.Fragment>
  );
}
