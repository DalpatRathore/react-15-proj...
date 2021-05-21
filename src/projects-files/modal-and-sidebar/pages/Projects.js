import React from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../../context";

const contentVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", duration: 0.5 },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: { duration: 0.5 },
  },
};
const Projects = () => {
  const { openSidebar, openModal } = useGlobalContext();
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
        <button className="btn" onClick={openModal}>
          More Info
        </button>
      </motion.div>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars></FaBars>
      </button>
    </div>
  );
};

export default Projects;
