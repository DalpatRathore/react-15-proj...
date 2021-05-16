import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";

const articleVariants = {
  enter: {
    x: "100vw",
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 200, delay: 0.5 },
      opacity: { duration: 0.5 },
    },
  },
};

const paraVariants = {
  enter: {
    x: "-100%",
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const Question = props => {
  const { title, info } = props;
  const [showInfo, setShowInfo] = useState(false);
  return (
    <motion.article
      className={showInfo ? "question open" : "question"}
      variants={articleVariants}
      initial="enter"
      animate="center"
    >
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <motion.p variants={paraVariants}>{info}</motion.p>}
    </motion.article>
  );
};

export default Question;
