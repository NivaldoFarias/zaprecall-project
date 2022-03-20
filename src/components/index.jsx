import React from "react";
import FirstScreen from "./FirstScreen";
import Slider from "./Slider";
import Logo from "./../assets/logo.png";
import { getRandomInt } from "./../utils/index";

export default function Wrapper() {
  const [initRecall, setInitRecall] = React.useState(false);
  const [loadScreen, setLoadScreen] = React.useState(false);
  const generatedTimeOut = getRandomInt(1000, 4500);

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
        <FirstScreen />
      ) : (
        <div id="nav-screen" className={initRecall ? "hidden" : ""}>
          <figure id="logo">
            <img src={Logo} alt="logo zap recall" />
            <figcaption>ZapRecall</figcaption>
          </figure>
          <button id="begin-btn" onClick={() => setInitRecall(!initRecall)}>
            Iniciar Recall!
          </button>
          <Slider />
        </div>
      )}
    </React.Fragment>
  );
}
