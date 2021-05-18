import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import "./SliderApp.css";
import data from "./data";
import { motion, AnimatePresence } from "framer-motion";
import { v1 as uuidv1 } from "uuid";

const sectionVariants = {
  enter: {
    x: "100vw",
    scale: 0,
    opacity: 0,
  },
  center: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const articleVariants = {
  enter: {
    x: "-100vw",
  },
  center: {
    x: 0,
    transition: {
      x: { type: "spring", stiffness: 500, delay: 0.5, duration: 1 },
    },
  },
  exit: {
    scale: 0,
    transition: {
      x: { duration: 0.5 },
    },
  },
};

const SliderApp = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setPeople(data);
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="sliderApp">
      <motion.section
        className="section"
        variants={sectionVariants}
        initial="enter"
        animate="center"
      >
        <div className="title">
          <h2>
            <span>/</span>reviews
          </h2>
        </div>
        <div className="section-center">
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <React.Fragment key={id}>
                <AnimatePresence>
                  <motion.article
                    className={position}
                    key={uuidv1()}
                    variants={articleVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <img src={image} alt={name} className="person-img" />
                    <h4>{name}</h4>
                    <p className="title">{title}</p>
                    <p className="text">{quote}</p>
                    <FaQuoteRight className="icon"></FaQuoteRight>
                  </motion.article>
                </AnimatePresence>
              </React.Fragment>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft></FiChevronLeft>{" "}
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight></FiChevronRight>{" "}
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default SliderApp;
