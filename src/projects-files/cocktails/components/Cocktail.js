import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const articleVariants = {
  enter: {
    scale: 0,
    opacity: 0,
  },
  center: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Cocktail = props => {
  const { id, name, image, info, glass } = props;

  return (
    <motion.article
      className="cocktail"
      variants={articleVariants}
      initial="enter"
      animate="center"
    >
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
      </div>
      <Link to={`/cocktails/${id}`} className="btn-details">
        Detials
      </Link>
      <span className="cocktail-stand"></span>
    </motion.article>
  );
};

export default Cocktail;
