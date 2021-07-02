import React, { useEffect, useState } from "react";
import Alert from "./Alert";
import "./GroceryBudApp.css";
import List from "./List";
import { motion } from "framer-motion";
import { v1 as uuidv1 } from "uuid";

const formVariants = {
  enter: {
    x: "-100%",
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 500, duration: 0.5 },
      opacity: { duration: 0.5 },
    },
  },
};

const getLocalStorage = () => {
  let list = localStorage.getItem("GroceryBud");
  if (list) {
    return JSON.parse(localStorage.getItem("GroceryBud"));
  } else {
    return [];
  }
};

const GroceryBudApp = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  useEffect(() => {
    localStorage.setItem("GroceryBud", JSON.stringify(list));
  }, [list]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!name) {
      //   setAlert({
      //     show: true,
      //     msg: "Please enter value",
      //     type: "danger",
      //   });
      showAlert(true, "danger", "please add item!");
    } else if (name && isEditing) {
      //    edit
      setList(
        list.map(item => {
          if (item.id === editID) {
            return { ...item, title: name, id: uuidv1() };
          }
          return item;
        })
      );

      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "item saved!");
    } else {
      showAlert(true, "success", "item added!");
      const newItem = {
        // id: new Date().getTime().toString(),
        id: uuidv1(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    const confirmMsg = window.confirm("Are you sure?");
    if (confirmMsg) {
      showAlert(true, "danger", "list cleared!");
      setList([]);
    }
  };

  const removeItem = id => {
    showAlert(true, "danger", "item removed!");
    setList(list.filter(item => item.id !== id));
  };
  const editItem = id => {
    const specificItem = list.find(item => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  return (
    <div className="groceryBudApp">
      <section className="section-center">
        <form onSubmit={handleSubmit} className="grocery-form">
          <h3>Grocery Bud</h3>
          <motion.div
            className="form-control"
            variants={formVariants}
            initial="enter"
            animate="center"
          >
            <input
              className="grocery"
              placeholder="e.g. milk"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <button className="submit-btn" type="submit">
              {isEditing ? "Save" : "Add Item"}
            </button>
            {alert.show && (
              <Alert {...alert} removeAlert={showAlert} list={list}></Alert>
            )}
          </motion.div>
        </form>
        {list.length > 0 && (
          <div className="grocery-container">
            <div
              className={`${isEditing ? "overlay" : "overlay-hidden"}`}
            ></div>
            <List
              items={list}
              removeItem={removeItem}
              editItem={editItem}
            ></List>
            <button className="clear-btn" onClick={clearList}>
              Clear List
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default GroceryBudApp;
