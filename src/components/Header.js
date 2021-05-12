import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/" className="header__logoBg">
        <span className="header__logo">15 Proj's</span>
      </NavLink>
    </div>
  );
};

export default Header;
