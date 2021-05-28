import React from "react";
import loader from "../cocktail-loader.gif";
import { motion } from "framer-motion";

const loaderVariants = {
  enter: {
    scale: 0,
  },
  center: {
    scale: 1,
    transition: {
      scale: { type: "spring", stiffness: 500 },
    },
  },
};

const Loader = () => {
  return (
    <motion.div
      className="loader-container"
      variants={loaderVariants}
      initial="enter"
      animate="center"
    >
      <img src={loader} alt="" />
    </motion.div>
  );
};

export default Loader;
