import React from "react";
import { FaBars } from "react-icons/fa";
// import { AppContext, useGlobalContext } from "./context";
import { useGlobalContext } from "../../../context";
import { motion } from "framer-motion";

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

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
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

export default Home;
