import React from "react";
import Loading from "./Loading";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../../modal-and-sidebar/context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  console.log("cocktails :>> ", cocktails);
  if (loading) {
    return <Loading></Loading>;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria.
      </h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map(item => {
          return <Cocktail key={item.id} {...item}></Cocktail>;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
