import React from "react";
import Navbar from "./components/Navbar";
import "./NavbarApp.css";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

const NavbarApp = () => {
  const location = useLocation();
  return (
    <div className="navbarApp">
      <Navbar></Navbar>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/navbar">
            <Home></Home>
          </Route>
          <Route exact path="/navbar/videos">
            <Videos></Videos>
          </Route>
          <Route exact path="/navbar/projects">
            <Projects></Projects>
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer></Footer>
    </div>
  );
};

export default NavbarApp;
