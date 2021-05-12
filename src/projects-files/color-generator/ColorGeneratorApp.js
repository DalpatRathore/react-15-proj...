import React, { useState } from "react";
import "./ColorGeneratorApp.css";
import Values from "values.js";
import SingleColor from "./SingleColor";
const ColorGeneratorApp = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#069").all(10));
  const handleSubmit = e => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log("error :>> ", error);
    }
  };
  return (
    <div className="colorGeneratorApp">
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={e => setColor(e.target.value)}
            placeholder="#069"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          console.log("color :>> ", color);
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            ></SingleColor>
          );
        })}
      </section>
    </div>
  );
};

export default ColorGeneratorApp;
