import React, { useState } from "react";
import "./MenuApp.css";
import Menu from "./Menu";

import Categories from "./Categories";
import items from "./data";
const allCategories = ["all", ...new Set(items.map(item => item.category))];

const MenuApp = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

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
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </section>
      </main>
    </div>
  );
};

export default MenuApp;
