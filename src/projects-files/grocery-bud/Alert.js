import React, { useEffect } from "react";
import { motion } from "framer-motion";

const alertVariants = {
  enter: {
    x: "-100%",
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 800, duration: 0.8 },
      opacity: { duration: 0.5 },
    },
  },
};

const Alert = props => {
  const { type, msg, removeAlert, list } = props;
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert();
    }, 2500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [list, removeAlert]);
  return (
    <motion.span
      className={`alert alert-${type}`}
      variants={alertVariants}
      initial="enter"
      animate="center"
    >
      {msg}
    </motion.span>
  );
};

export default Alert;
