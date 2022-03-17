import React from "react";
import FirstScreen from "./FirstScreen";

export default function Wrapper() {
  const [initRecall, setInitRecall] = React.useState(false);

  return (
    <React.Fragment>
      <div id="nav-screen" className={initRecall ? "hidden" : ""}>
        <figure id="logo">
          <img src="./assets/logo.png" alt="logo zap recall" />
          <figcaption>ZapRecall</figcaption>
        </figure>
        <button id="begin-btn" onClick={() => setInitRecall(!initRecall)}>
          Iniciar Recall!
        </button>
      </div>
      <div id="first-screen">{initRecall ? <FirstScreen /> : null}</div>
    </React.Fragment>
  );
}
