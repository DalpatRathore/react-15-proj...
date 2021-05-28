import React from "react";
import Loader from "./Loader";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../../../context";
import { motion } from "framer-motion";

const textVariants = {
  enter: {
    scale: 0,
    opacity: 0,
  },
  center: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const CocktailList = () => {
  const { cocktails, loading, error } = useGlobalContext();
  // console.log("cocktails :>> ", cocktails);
  if (loading) {
    return (
      <div className="cocktail-section">
        <Loader></Loader>
      </div>
    );
  }

  if (error) {
    return (
      <div className="cocktail-section">
        <motion.h3
          className="error"
          variants={textVariants}
          initial="enter"
          animate="center"
        >
          Sorry! somethings went wrong
        </motion.h3>
      </div>
    );
  }

  if (cocktails.length < 1) {
    return (
      <div className="cocktail-section">
        <motion.h2
          className="section-title"
          variants={textVariants}
          initial="enter"
          animate="center"
        >
          no cocktails matched your search criteria.
        </motion.h2>
      </div>
    );
  }
  return (
    <div className="cocktail-section">
      <h2 className="cocktail-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map(item => {
          return <Cocktail key={item.id} {...item}></Cocktail>;
        })}
      </div>
    </div>
  );
};

export default CocktailList;
