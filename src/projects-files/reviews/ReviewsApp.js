import React from "react";
import Review from "./Review";
import "./ReviewsApp.css";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
    rotate: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 360,
    transition: { duration: 1 },
  },
};
const ReviewsApp = () => {
  return (
    <div className="reviewsApp">
      <main>
        <motion.section
          className="container"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="title">
            <h2>our reviews</h2>
            <div className="underline"></div>
          </div>
          <Review />
        </motion.section>
      </main>
    </div>
  );
};

export default ReviewsApp;
