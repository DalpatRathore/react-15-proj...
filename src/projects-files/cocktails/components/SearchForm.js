import React, { useRef } from "react";
import { useGlobalContext } from "../../../context";
import { FaCocktail } from "react-icons/fa";

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
          <div className="input-container">
            <input
              type="text"
              id="name"
              placeholder="search"
              autoComplete="off"
              ref={searchValueRef}
              onChange={searchCocktail}
            />
            <FaCocktail className="cocktail-icon"></FaCocktail>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
