import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const listVariants = {
  enter: {
    scale: 0,
    opacity: 0,
  },
  center: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const List = props => {
  const { items, removeItem, editItem } = props;
  // console.log("items :>> ", items);
  return (
    <div className="grocery-list">
      <AnimatePresence>
        {items.map((item, index) => {
          const { id, title } = item;
          return (
            <motion.article
              key={id}
              className="grocery-item"
              variants={listVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <p className="title">
                {index + 1}. {title}
              </p>

              <div className="btn-container">
                <button className="edit-btn" onClick={() => editItem(id)}>
                  <FaEdit></FaEdit>
                </button>
                <button className="delete-btn" onClick={() => removeItem(id)}>
                  <FaTrash></FaTrash>
                </button>
              </div>
            </motion.article>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default List;
