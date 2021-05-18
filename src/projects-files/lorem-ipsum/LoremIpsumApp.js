import React, { useState } from "react";
import data from "./data";
import msgImg from "./msgImg.gif";
import "./LoremIpsumApp.css";
import { motion } from "framer-motion";

const mainVariants = {
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

const LoremIpsumApp = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const [error, setError] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      setError(true);
    } else {
      if (count > 8) {
        amount = 8;
      }
      setError(false);
      setText(data.slice(0, amount));
    }
  };
  return (
    <div className="loremIpsumApp">
      <motion.div
        className="section-center"
        variants={mainVariants}
        initial="enter"
        animate="center"
      >
        <h2>Tired of boring lorem ipsum?</h2>
        <form className="lorem-form">
          <label htmlFor="amount">Paragraphs:</label>
          <input
            className={`${error ? "error" : ""}`}
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={e => setCount(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit} className="btn">
            Generate
          </button>
        </form>
        {error ? (
          <article className="lorem-text">
            <motion.img
              key="dogImg"
              src={msgImg}
              alt=""
              className="error-img"
              variants={mainVariants}
              initial="enter"
              animate="center"
            />
          </article>
        ) : (
          <article className="lorem-text">
            {text.map((item, index) => {
              return (
                <motion.p
                  key={index}
                  variants={mainVariants}
                  initial="enter"
                  animate="center"
                >
                  <span className="badge">{index + 1}</span>
                  {item}
                </motion.p>
              );
            })}
          </article>
        )}
      </motion.div>
    </div>
  );
};

export default LoremIpsumApp;
