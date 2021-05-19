import React, { useState, useEffect } from "react";
// import rgbTohex from "./utils";
import { motion } from "framer-motion";

const colorVariants = {
  enter: {
    scale: 0,
    opacity: 0,
  },
  center: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const alertVariants = {
  enter: {
    scale: 0,
    opacity: 0,
  },
  center: {
    scale: 1,
    opacity: 1,
    transition: {
      scale: { type: "spring", stiffness: 500, duration: 0.5 },
    },
  },
};

const SingleColor = props => {
  const { rgb, weight, index, hexColor } = props;
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  // const hex = rgbTohex(...rgb);
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 1500);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);
  return (
    <motion.article
      variants={colorVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && (
        <motion.span
          className="alert"
          variants={alertVariants}
          initial="enter"
          animate="center"
        >
          Copied to clipboard
        </motion.span>
      )}
    </motion.article>
  );
};

export default SingleColor;
