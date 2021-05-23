import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

import "./StripeSubmenusApp.css";
import Submenu from "./Submenu";
import Sidebar from "./Sidebar";

const StripeSubmenusApp = () => {
  return (
    <div className="stripeSubmenusApp">
      <div className="gradient-bg">
        <Navbar></Navbar>
        <Submenu></Submenu>
        <Hero></Hero>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default StripeSubmenusApp;
