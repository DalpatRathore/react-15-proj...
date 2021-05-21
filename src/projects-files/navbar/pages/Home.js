import React from "react";
import { motion } from "framer-motion";

const contentVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5 },
  },
};

const Home = () => {
  return (
    <div className="home">
      <motion.div
        className="content-container"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1>Coding Addict</h1>
        <h3>John Smilga</h3>
        <a
          href="https://www.johnsmilga.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Official Site
        </a>
      </motion.div>
    </div>
  );
};

export default Home;
