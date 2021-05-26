import React from "react";
import { useGlobalContext } from "../../context";
import { motion } from "framer-motion";

const cartItemsVariants = {
  enter: {
    scale: 0,
    opacity: 0,
  },
  center: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, increase, decrease } = useGlobalContext();
  // const { remove, toggleAmount } = useGlobalContext();
  return (
    <div className="cart-item-wrapper">
      <motion.article
        className="cart-item"
        variants={cartItemsVariants}
        initial="enter"
        animate="center"
        exit="exit"
      >
        <img src={img} alt={title} />
        <div>
          <h4>{title}</h4>
          <h4 className="item-price">${price}</h4>
          {/* remove button */}
          <button className="remove-btn" onClick={() => remove(id)}>
            remove
          </button>
        </div>
        <div>
          {/* increase amount */}
          {/* <button className="amount-btn" onClick={() => toggleAmount(id, "inc")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button> */}
          <button className="amount-btn" onClick={() => increase(id)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
            </svg>
          </button>
          {/* amount */}
          <p className="amount">{amount}</p>
          {/* decrease amount */}
          {/* <button className="amount-btn" onClick={() => toggleAmount(id, "dec")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button> */}
          <button className="amount-btn" onClick={() => decrease(id, "dec")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
        </div>
      </motion.article>
    </div>
  );
};

export default CartItem;
