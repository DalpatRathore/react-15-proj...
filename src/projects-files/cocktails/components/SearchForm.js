import React, { useRef } from "react";
import { useGlobalContext } from "../../../context";

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
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValueRef}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
