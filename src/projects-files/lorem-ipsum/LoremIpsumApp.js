import React, { useState } from "react";
import data from "./data";
import "./LoremIpsumApp.css";

const LoremIpsumApp = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }

    setText(data.slice(0, amount));
  };
  return (
    <div className="loremIpsumApp">
      <div className="section-center">
        <h3>Tired of boring lorem ipsum?</h3>
        <form onSubmit={handleSubmit} className="lorem-form">
          <label htmlFor="amount">Paragraphs:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={e => setCount(e.target.value)}
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
        <article className="lorem-text">
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </div>
    </div>
  );
};

export default LoremIpsumApp;
