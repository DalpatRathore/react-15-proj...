import React from "react";
import "./ModalSidebarApp.css";
import Home from "./pages/Home";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Videos from "./pages/Videos";

const ModalSidebarApp = () => {
  const location = useLocation();
  return (
    <div className="modalSidebarApp">
      <Modal></Modal>
      <Sidebar></Sidebar>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/modal-and-sidebar">
            <Home></Home>
          </Route>
          <Route exact path="/modal-and-sidebar/videos">
            <Videos></Videos>
          </Route>
          <Route exact path="/modal-and-sidebar/projects">
            <Projects></Projects>
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer></Footer>
    </div>
  );
};

export default ModalSidebarApp;
