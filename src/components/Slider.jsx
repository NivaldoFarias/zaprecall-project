import React from "react";

// souce: https://ahdev2020.medium.com/how-to-create-range-slider-in-react-9392a123f8fb

function Bubble(props) {
  return <div className="bubble">{props.value}</div>;
}

export default function Slider() {
  const [value, onChange] = React.useState(1);
  const element = document.querySelector(".bubble");

  React.useEffect(() => {
    if (element) {
      element.style.left = `${Number(value / 4)}px`;
    }
  });

  return (
    <>
      <div className="slider">
        <input
          type="range"
          min="1"
          max="8"
          value={value}
          onChange={({ target: { value: radius } }) => {
            onChange(radius);
          }}
        />
        <Bubble value={value}></Bubble>
        <div className="marks-container">
          <div className="tick-mark"></div>
          <div className="tick-mark"></div>
          <div className="tick-mark"></div>
          <div className="tick-mark"></div>
          <div className="tick-mark"></div>
          <div className="tick-mark"></div>
          <div className="tick-mark"></div>
          <div className="tick-mark"></div>
        </div>
      </div>
    </>
  );
}
