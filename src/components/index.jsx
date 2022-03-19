import React from "react";
import FirstScreen from "./FirstScreen";

export default function Wrapper() {
  const [initRecall, setInitRecall] = React.useState(false);
  const [loadScreen, setLoadScreen] = React.useState(false);
  const generatedTimeOut = randomTimeOut(1000, 4500);

  React.useEffect(() => {
    if (loadScreen) {
      const timeout = setTimeout(() => {
        setLoadScreen(false);
      }, generatedTimeOut);

      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadScreen]);

  function randomTimeOut(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

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
