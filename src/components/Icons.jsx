import React from "react";

export function Icons(props) {
  const { icons } = props;

  return (
    <section>
      {icons.map((icon, index) => (
        <ion-icon key={index} class={icon.class} name={icon.name}></ion-icon>
      ))}
    </section>
  );
}
