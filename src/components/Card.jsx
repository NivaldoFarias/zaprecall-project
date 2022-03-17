export function Card(props) {
  const { key, number, question, answer } = props;

  return (
    <article key={key}>
      <div className="display">
        <p>Pergunta {number}</p>
        <ion-icon name="play-outline"></ion-icon>
      </div>
      <div className="card hidden">
        <div className="card-question">
          <p>{question}</p>
          <span className="material-icons-outlined">360</span>
        </div>
        <div className="card-answer">
          <p>{answer}</p>
          <div className="wrong">Não lembrei</div>
          <div className="in-between">Quase não lembrei</div>
          <div className="success">Zap!</div>
        </div>
      </div>
    </article>
  );
}
