import React from "react";
import FirstScreen from "./FirstScreen";
import Slider from "./Slider";
import Logo from "./../assets/logo.png";
import { getRandomInt } from "./../utils/index";

export default function Wrapper() {
  const [initRecall, setInitRecall] = React.useState(false);
  const [loadScreen, setLoadScreen] = React.useState(false);
  const [scoreGoal, setScoreGoal] = React.useState(1);
  const generatedTimeOut = getRandomInt(1000, 4500);

  function userGoal(value) {
    setScoreGoal(value);
  }

  React.useEffect(() => {
    if (loadScreen) {
      const timeout = setTimeout(() => {
        setLoadScreen(false);
      }, generatedTimeOut);

      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadScreen]);

  return (
    <React.Fragment>
      {initRecall ? (
        <FirstScreen scoreGoal={scoreGoal} />
      ) : (
        <div id="nav-screen" className={initRecall ? "hidden" : ""}>
          <figure id="logo">
            <img src={Logo} alt="logo zap recall" />
            <figcaption>ZapRecall</figcaption>
          </figure>
          <button id="begin-btn" onClick={() => setInitRecall(!initRecall)}>
            Iniciar Recall!
          </button>
          <Slider userGoal={userGoal} hasStarted={initRecall} />
        </div>
      )}
    </React.Fragment>
  );
}
