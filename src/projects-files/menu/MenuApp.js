import React, { useState } from "react";
import "./MenuApp.css";
import Menu from "./Menu";
import { MdRestaurant } from "react-icons/md";
import Categories from "./Categories";
import items from "./data";
import { motion } from "framer-motion";

const allCategories = ["all", ...new Set(items.map(item => item.category))];

const titleVariants = {
  enter: {
    x: "100vw",
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 800, duration: 0.8 },
      opacity: { duration: 0.5 },
    },
  },
};

const MenuApp = () => {
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = category => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter(item => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="menuApp">
      <main>
        <section className="menu section">
          <div className="title">
            <MdRestaurant className="icon"></MdRestaurant>
            <h2>our menu</h2>
            <motion.div
              className="underline"
              variants={titleVariants}
              initial="enter"
              animate="center"
            ></motion.div>
          </div>
          <Categories categories={allCategories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </section>
      </main>
    </div>
  );
};

export default MenuApp;
