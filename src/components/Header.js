import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import MainLogo from "./MainLogo";
import { motion } from "framer-motion";

const logoBgVariants = {
  enter: {
    x: "-100%",
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 500 },
    },
  },
};

const Header = () => {
  return (
    <div className="header">
      <motion.div
        className="header__svgLogoBg"
        variants={logoBgVariants}
        initial="enter"
        animate="center"
      >
        <NavLink to="/">
          <MainLogo></MainLogo>
        </NavLink>
      </motion.div>
      <NavLink to="/" className="header__logoBg">
        {/* <span className="header__logo">15 Proj's</span> */}
      </NavLink>
    </div>
  );
};

export default Header;
