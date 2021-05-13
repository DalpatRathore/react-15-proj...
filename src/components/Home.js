import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import projectsData from "./projectsData";
import { motion } from "framer-motion";

const infoCardVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: "-100vw",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 2 },
  },
};

const Home = () => {
  return (
    <div className="home">
      {projectsData.map(project => {
        const { id, projectName, projectPageName } = project;
        return (
          <motion.div
            key={id}
            className="home__projectInfoCard"
            variants={infoCardVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="home__badge">{id}</span>
            <Link to={`/${projectPageName}`} className="home__projectTitle">
              {projectName}
            </Link>
            <Link to={`/${projectPageName}`} className="home__projectInfoBtn">
              View Project
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Home;
