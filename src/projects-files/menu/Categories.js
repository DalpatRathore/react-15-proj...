import React, { useState } from "react";
import { motion } from "framer-motion";

const buttonVariants = {
  enter: {
    x: "100vw",
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

const Categories = ({ categories, filterItems }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleClick = category => {
    filterItems(category);
    setSelectedCategory(category);
  };

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <motion.button
            variants={buttonVariants}
            initial="enter"
            animate="center"
            type="button"
            className={`filter-btn ${
              category === selectedCategory && "active"
            }`}
            key={index}
            onClick={() => handleClick(category)}
          >
            {category}
          </motion.button>
        );
      })}
    </div>
  );
};

export default Categories;
