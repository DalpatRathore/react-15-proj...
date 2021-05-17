import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./TabsApp.css";
const url = "https://course-api.com/react-tabs-project";

const sectionVariants = {
  enter: {
    scale: 0,
    opacity: 0,
  },
  center: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const buttonsVariants = {
  enter: {
    y: "-100vw",
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
    transition: {
      y: { type: "spring", stiffness: 200, delay: 1, duration: 1 },
      opacity: { duration: 0.5 },
    },
  },
};
const underlineVariants = {
  enter: {
    x: "-100vw",
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 500, delay: 2, duration: 1 },
      opacity: { duration: 0.5 },
    },
  },
};
const articleVariants = {
  enter: {
    scale: 0,
    opacity: 0,
  },
  center: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.5, duration: 0.5 },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    scale: 0,
    transition: { duration: 0.5 },
  },
};

const TabsApp = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <div className="tabsApp">
        <section className="loading">
          <span className="spinner-1">
            <span className="spinner-2"></span>
          </span>
        </section>
      </div>
    );
  }
  if (error) {
    return (
      <div className="tabsApp">
        <section className="loading">
          <h3>Sorry! Something went wrong.</h3>
        </section>
      </div>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <div className="tabsApp">
      <motion.section
        key="main"
        className="section"
        variants={sectionVariants}
        initial="enter"
        animate="center"
        exit="exit"
      >
        <div className="title">
          <h2>experience</h2>
          <motion.div
            className="underline"
            variants={underlineVariants}
            initial="enter"
            animate="center"
          ></motion.div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {jobs.map((item, index) => {
              return (
                <motion.button
                  variants={buttonsVariants}
                  initial="enter"
                  animate="center"
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && "active-btn"}`}
                >
                  {item.company}
                </motion.button>
              );
            })}
          </div>
          <AnimatePresence>
            <motion.article
              className="job-info"
              key={title}
              variants={articleVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className="job-date">{dates}</p>
              {duties.map((duty, index) => {
                return (
                  <div key={index} className="job-desc">
                    <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                    <p>{duty}</p>
                  </div>
                );
              })}
            </motion.article>
          </AnimatePresence>
        </div>
      </motion.section>
    </div>
  );
};

export default TabsApp;
