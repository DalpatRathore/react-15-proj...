import React, { useState, useRef, useEffect } from "react";
import "./ColorGeneratorApp.css";
import Values from "values.js";
import SingleColor from "./SingleColor";
import { motion } from "framer-motion";

const formVariants = {
  enter: {
    x: "-100%",
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 500, duration: 0.5 },
      opacity: { duration: 0.5 },
    },
  },
};

const ColorGeneratorApp = () => {
  const inputRef = useRef(null);
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#006699").all(10));

  const handleSubmit = e => {
    e.preventDefault();

    if (color.length < 3 || color.length > 8) {
      setError(true);
      return;
    }
    try {
      let colors = new Values(`#${color}`).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="colorGeneratorApp">
      <section className="container">
        <h2>Shades Generator</h2>
        <motion.form
          onSubmit={handleSubmit}
          variants={formVariants}
          initial="enter"
          animate="center"
        >
          <input
            ref={inputRef}
            type="number"
            value={color}
            onChange={e => setColor(e.target.value)}
            placeholder="006699"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Generate
          </button>
        </motion.form>
        <span className="hint">
          Hint: provide 3, 4, 6 or 8 digits input values
        </span>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={color.hex}
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
