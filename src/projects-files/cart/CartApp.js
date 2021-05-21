import React from "react";
import { useGlobalContext } from "../../context";
import "./Cart.css";
import CartContainer from "./CartContainer";
import Navbar from "./Navbar";

const CartApp = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="cartApp">
      <main>
        <Navbar></Navbar>
        <CartContainer></CartContainer>
      </main>
    </div>
  );
};

export default CartApp;
