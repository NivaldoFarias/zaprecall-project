import React from "react";
import Cards from "./Cards";

export default function FirstScreen() {
  return (
    <React.Fragment>
      <header>
        <img src="./assets/logo-pequeno.png" alt="logo zap recall" />
        <h3>ZapRecall</h3>
      </header>
      <Cards></Cards>
      <footer>
        <p>0/4 CONCLUÍDOS</p>
      </footer>
    </React.Fragment>
  );
}
