import React, { useRef } from "react";
import { useGlobalContext } from "../../../context";
import { FaCocktail } from "react-icons/fa";
import { motion } from "framer-motion";

const inputVariants = {
  enter: {
    x: "-100%",
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 500, duration: 0.5 },
      opacity: { duration: 0.5 },
    },
  },
};

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValueRef = useRef("");
  React.useEffect(() => {
    searchValueRef.current.focus();
  }, []);
  const searchCocktail = () => {
    setSearchTerm(searchValueRef.current.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <section className="search-section">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your favorite cocktail</label>
          <motion.div
            className="input-container"
            variants={inputVariants}
            initial="enter"
            animate="center"
          >
            <input
              type="text"
              id="name"
              placeholder="search"
              autoComplete="off"
              ref={searchValueRef}
              onChange={searchCocktail}
            />
            <FaCocktail className="cocktail-icon"></FaCocktail>
          </motion.div>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
