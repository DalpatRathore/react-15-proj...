import React from "react";
import { motion } from "framer-motion";
const articleVariants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
    x: "-10%",
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    x: 0,
    transition: { delay: 0.5, duration: 0.5 },
  },
};

const List = props => {
  const { people } = props;
  return (
    <>
      {people.map(person => {
        const { id, name, age, image } = person;
        return (
          <motion.article
            key={id}
            className="list"
            variants={articleVariants}
            initial="hidden"
            animate="visible"
          >
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </motion.article>
        );
      })}
    </>
  );
};

export default List;
