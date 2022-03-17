import React from "react";

export default function FirstScreen() {
  return (
    <React.Fragment>
      <header>
        <img src="./assets/logo-pequeno.png" alt="logo zap recall" />
        <h3>ZapRecall</h3>
      </header>
      <main>
        <article>
          <p>Pergunta 1</p>
          <ion-icon name="play-outline"></ion-icon>
        </article>
        <article>
          <p>Pergunta 2</p>
          <ion-icon name="play-outline"></ion-icon>
        </article>
        <article>
          <p>Pergunta 3</p>
          <ion-icon name="play-outline"></ion-icon>
        </article>
        <article>
          <p>Pergunta 4</p>
          <ion-icon name="play-outline"></ion-icon>
        </article>
      </main>
      <footer>
        <p>0/4 CONCLUÍDOS</p>
      </footer>
    </React.Fragment>
  );
}
