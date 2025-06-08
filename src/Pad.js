import { useState } from "react";

export default function Pad(props) {
  return (
    <button
      className={props.on ? "on" : ""}
      style={{ backgroundColor: props.color }}
      onClick={() => props.toggle(props.id)}
    ></button>
  );
}
