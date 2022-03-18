import React from "react";
import Cards from "./card/index";
import { Footer } from "./Footer";

export default function FirstScreen() {
  return (
    <React.Fragment>
      <header>
        <img src="./assets/logo-pequeno.png" alt="logo zap recall" />
        <h3>ZapRecall</h3>
      </header>
      <Cards></Cards>
      <Footer></Footer>
    </React.Fragment>
  );
}
