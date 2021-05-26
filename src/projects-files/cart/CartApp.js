import React from "react";
import { useGlobalContext } from "../../context";
import "./Cart.css";
import CartContainer from "./CartContainer";
import Navbar from "./Navbar";

const CartApp = () => {
  const { isLoading, isError } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="cartApp">
        <div className="loader-container">
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="cartApp">
        <div className="loader-container">
          <h3 className="error">Sorry! somethings went wrong.</h3>
        </div>
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
