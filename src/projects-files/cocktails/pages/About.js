import React from "react";
import { motion } from "framer-motion";
const contentVariants = {
  enter: {
    scale: 0,
    opacity: 0,
  },
  center: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const About = () => {
  return (
    <section className="about-section">
      <motion.div
        className="content-wrapper"
        variants={contentVariants}
        initial="enter"
        animate="center"
      >
        <h1 className="section-title">About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          esse labore hic debitis assumenda praesentium necessitatibus iusto
          natus vel doloremque rem beatae facere maiores soluta aspernatur
          reiciendis eum, vero, autem eius ducimus amet architecto velit dolor!
          Eveniet dolores tempore saepe.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
