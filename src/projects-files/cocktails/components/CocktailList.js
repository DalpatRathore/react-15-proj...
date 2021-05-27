import React from "react";
import Loader from "./Loader";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../../../context";

const CocktailList = () => {
  const { cocktails, loading, error } = useGlobalContext();
  // console.log("cocktails :>> ", cocktails);
  if (loading) {
    return (
      <div className="cocktail-section">
        <Loader></Loader>
      </div>
    );
  }

  if (error) {
    return (
      <div className="cocktail-section">
        <h3 className="error">Sorry! somethings went wrong</h3>
      </div>
    );
  }

  if (cocktails.length < 1) {
    return (
      <div className="cocktail-section">
        <h2 className="section-title">
          no cocktails matched your search criteria.
        </h2>
      </div>
    );
  }
  return (
    <div className="cocktail-section">
      <h2 className="cocktail-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map(item => {
          return <Cocktail key={item.id} {...item}></Cocktail>;
        })}
      </div>
    </div>
  );
};

export default CocktailList;
