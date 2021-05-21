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
const Projects = () => {
  return (
    <div className="projects">
      <motion.div
        className="content-container"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1>Projects</h1>
        <h3>John Smilga</h3>
        <a
          href="https://www.johnsmilga.com/projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </a>
      </motion.div>
    </div>
  );
};

export default Projects;
