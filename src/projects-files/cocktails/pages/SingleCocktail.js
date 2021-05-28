import React from "react";
import Loader from "../components/Loader";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
const urlCocktail = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const drinkVariants = {
  enter: {
    scale: 0,
    y: "-100%",
    opacity: 0,
  },
  center: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const textVariants = {
  enter: {
    scale: 0,
    opacity: 0,
  },
  center: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3 },
  },
};
const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setloading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);
  React.useEffect(() => {
    setloading(true);
    async function getCocktails() {
      try {
        const response = await fetch(`${urlCocktail}${id}`);
        const data = await response.json();
        console.log(data.drinks);
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instruction,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instruction,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log("error :>> ", error);
      }
      setloading(false);
    }
    getCocktails();
  }, [id]);

  if (loading) {
    return (
      <div className="cocktail-section">
        <Loader></Loader>
      </div>
    );
  }
  if (!cocktail) {
    return (
      <div className="cocktail-section">
        <motion.h2
          className="section-title"
          variants={textVariants}
          initial="enter"
          animate="center"
        >
          no cocktail to display
        </motion.h2>
        <Link to="/cocktails" className="btn-back">
          Back
        </Link>
      </div>
    );
  } else {
    const { name, image, category, info, glass, instruction, ingredients } =
      cocktail;
    console.log(cocktail);

    return (
      <section className="drink-section">
        <motion.div
          className="drink"
          variants={drinkVariants}
          initial="enter"
          animate="center"
        >
          <div className="drink-wrapper">
            <div className="drink-info">
              <div className="label-container">
                <span className="drink-data">name </span>
                <p>{name}</p>
              </div>

              <div className="label-container">
                <span className="drink-data">category </span>
                <p>{category}</p>
              </div>
              <div className="label-container">
                <span className="drink-data">info </span>
                <p>{info}</p>
              </div>
              <div className="label-container">
                <span className="drink-data">glass </span>
                <p>{glass}</p>
              </div>
              <div className="label-container">
                <span className="drink-data">instructons </span>
                <p>{instruction}</p>
              </div>
              <div className="label-container">
                <span className="drink-data ">ingredients </span>
                <p>
                  {ingredients.map((item, index) => {
                    return item ? <span key={index}> {item},</span> : null;
                  })}
                </p>
              </div>
            </div>
            <Link to="/cocktails" className="btn-back">
              Back
            </Link>
          </div>
          <div className="drink-img">
            <img src={image} alt={name}></img>
          </div>
        </motion.div>
      </section>
    );
  }
};

export default SingleCocktail;
