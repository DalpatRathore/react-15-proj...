import React from "react";
import { social } from "../data";
import { motion } from "framer-motion";

const iconsVariants = {
  enter: {
    x: "-100vw",
    opacity: 0,
    rotate: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    rotate: 360,
    transition: {
      x: { duration: 1 },
      opacity: { duration: 1 },
      rotate: { duration: 1.5 },
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
