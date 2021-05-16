import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const articleVariants = {
  enter: {
    x: "-100%",
    opacity: 0,
    scale: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      <AnimatePresence>
        {items.map(menuItem => {
          const { id, title, img, desc, price } = menuItem;
          return (
            <motion.article
              key={id}
              className="menu-item"
              variants={articleVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">${price}</h4>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </motion.article>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
