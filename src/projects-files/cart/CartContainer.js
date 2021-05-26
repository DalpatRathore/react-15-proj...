import React from "react";
import { useGlobalContext } from "../../context";
import CartItem from "./CartItem";
import { AnimatePresence } from "framer-motion";

const CartContainer = () => {
  const { cart, total, clearCart, reloadCart } = useGlobalContext();

  const confirmClear = () => {
    const confirmMsg = window.confirm("Are you sure?");
    if (confirmMsg) {
      clearCart();
    }
  };

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>
            your <span>bag</span>
          </h2>
          <h4 className="empty-cart">is currently empty</h4>
          <button className="btn clear-btn" onClick={reloadCart}>
            Reload Cart
          </button>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>
          your <span>bag</span>
        </h2>
      </header>
      {/* cart items */}

      <div>
        <AnimatePresence>
          {cart.map(item => {
            return <CartItem key={item.id} {...item} />;
          })}
        </AnimatePresence>
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={confirmClear}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
