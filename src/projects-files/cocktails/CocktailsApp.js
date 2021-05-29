import React from "react";
import { Switch, Route } from "react-router-dom";
import "./CocktailsApp.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";

const CocktailsApp = () => {
  return (
    <div className="cocktailsApp">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/cocktails">
          <Home></Home>
        </Route>
        <Route path="/cocktails/about">
          <About></About>
        </Route>
        <Route path="/cocktails/:id">
          <SingleCocktail></SingleCocktail>
        </Route>
        <Route path="/cocktails/*">
          <Error></Error>
        </Route>
      </Switch>
    </div>
  );
};

export default CocktailsApp;
