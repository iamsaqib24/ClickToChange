import "./styles.css";
import padData from "./data";
import { useState } from "react";
import Pad from "./Pad";

export default function App() {
  const [data, setData] = useState(padData);

  function toggle(id) {
    console.log(`${id} - clicked`);
    setData((prev) =>
      prev.map((i) => {
        return i.id === id ? { ...i, on: !i.on } : i;
      })
    );
  }

  return (
    <div className="App">
      <h2>Click to change colors</h2>
      {data.map((item) => (
        <Pad
          key={item.id}
          id={item.id}
          color={item.color}
          on={item.on}
          toggle={toggle}
        />
      ))}
    </div>
  );
}
