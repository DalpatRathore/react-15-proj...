import React, { useState, useEffect } from "react";
import "./BirthdayRemindarApp.css";
import data from "./data";
import List from "./List";
import { motion } from "framer-motion";
const sectionVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,

    transition: { duration: 0.5 },
  },
};

const BirthdayRemindarApp = () => {
  const [people, setPeople] = useState(data);
  const [toggleData, setToggleData] = useState(true);

  useEffect(() => {
    if (toggleData) {
      setPeople(data);
    } else {
      setPeople([]);
    }
  }, [toggleData]);

  return (
    <div className="bdayRemindarApp">
      <main>
        <motion.section
          className="bdayRemindarApp__container"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h3>{people.length} Birthday Remindar</h3>
          <List people={people}></List>

          <button
            className="bdayRemindarApp__Btn"
            onClick={() => setToggleData(!toggleData)}
          >
            {toggleData ? "Clear All" : "Refresh Page"}
          </button>
        </motion.section>
      </main>
    </div>
  );
};

export default BirthdayRemindarApp;
