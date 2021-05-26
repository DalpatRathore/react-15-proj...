import React from "react";
import { useGlobalContext } from "../../context";
import { motion } from "framer-motion";
import Logo from "./Logo";
// import logo from "./logo(yb).svg";

const cartVariants = {
  enter: {
    scale: 1,
  },
  center: {
    scale: 1,
    rotate: [0, 20, -20, 0],
    transition: {
      x: { type: "spring", stiffness: 600 },
    },
  },
};
const amountVariants = {
  enter: {
    scale: 1.3,
  },
  center: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      duration: 0.5,
    },
  },
};

const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        {/* <h3>useReducer</h3> */}
        <div className="logo-wrapper">
          {/* <img src={logo} alt="use reducer" className="logo" /> */}
          <Logo></Logo>
        </div>
        <motion.div
          className="nav-container"
          variants={cartVariants}
          initial="enter"
          animate="center"
          key={amount}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="cartIcon"
          >
            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
          </svg>
          <motion.div
            className="amount-container"
            variants={amountVariants}
            initial="enter"
            animate="center"
            key={amount}
          >
            <p className="total-amount">{amount}</p>
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
