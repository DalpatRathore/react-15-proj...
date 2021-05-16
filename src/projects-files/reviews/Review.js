import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const articleVariants = {
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
  exit: {
    x: "100%",
    opacity: 0,
  },
};

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];
  const checkNumber = number => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex(index => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex(index => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <AnimatePresence>
        <div className="wrapper">
          <motion.div
            className="img-container"
            key={id}
            variants={articleVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </motion.div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>

          <div className="button-container">
            <motion.button
              className="prev-btn"
              onClick={prevPerson}
              whileHover={{ scale: 1.2 }}
            >
              <FaChevronLeft />
            </motion.button>
            <motion.button
              className="next-btn"
              onClick={nextPerson}
              whileHover={{ scale: 1.2 }}
            >
              <FaChevronRight />
            </motion.button>
          </div>
          <motion.button
            className="random-btn"
            onClick={randomPerson}
            whileHover={{ scale: 1.1 }}
          >
            surprise me
          </motion.button>
        </div>
      </AnimatePresence>
    </article>
  );
};

export default Review;
