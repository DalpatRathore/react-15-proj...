import React from "react";
import { social } from "../data";
import { motion } from "framer-motion";

const iconsVariants = {
  enter: {
    // x: "-100vw",
    scale: 0,
    opacity: 0,
  },
  center: {
    scale: 1,
    opacity: 1,

    transition: {
      type: "spring",
      stiffness: 300,
      delay: 0.5,
      duration: 1,
    },
  },
};

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-icons">
        {social.map(socialIcon => {
          const { id, url, icon } = socialIcon;
          return (
            <motion.li
              key={id}
              className="social-icon"
              variants={iconsVariants}
              initial="enter"
              animate="center"
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            </motion.li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
