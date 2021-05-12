import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

import "./StripeSubmenusApp.css";
import Submenu from "./Submenu";
import Sidebar from "./Sidebar";

const StripeSubmenusApp = () => {
  return (
    <div className="stripeSubmenusApp">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Hero></Hero>
      <Submenu></Submenu>
    </div>
  );
};

export default StripeSubmenusApp;
