import React, { useState } from "react";
import { motion } from "framer-motion";

const toursVariants = {
  exit: {
    scale: 0,
    opacity: 0,
    x: "100vw",
  },
};

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <motion.article
      className="single-tour"
      variants={toursVariants}
      exit="exit"
    >
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <motion.button
          className="delete-btn"
          onClick={() => removeTour(id)}
          whileHover={{ scale: 1.05 }}
        >
          not interested
        </motion.button>
      </footer>
    </motion.article>
  );
};

export default Tour;
