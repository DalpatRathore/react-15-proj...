import React from "react";
import "./CocktailsApp.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";

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
