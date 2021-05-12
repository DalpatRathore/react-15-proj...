import React, { useEffect, useState } from "react";
import Alert from "./Alert";
import "./GroceryBudApp.css";
import List from "./List";

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
      showAlert(true, "danger", "Please Enter Value");
    } else if (name && isEditing) {
      //    edit
      setList(
        list.map(item => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "Value changed");
    } else {
      showAlert(true, "success", "Item added to the list");
      const newItem = {
        id: new Date().getTime().toString(),
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
    showAlert(true, "danger", "Empty list");
    setList([]);
  };

  const removeItem = id => {
    showAlert(true, "danger", "Item removed");
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
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list}></Alert>
          )}
          <h3>Grocery Bud</h3>
          <div className="form-control">
            <input
              className="grocery"
              placeholder="e.g. milk"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <button className="submit-btn" type="submit">
              {isEditing ? "Edit" : "Submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="grocery-container">
            <List
              items={list}
              removeItem={removeItem}
              editItem={editItem}
            ></List>
            <button className="clear-btn" onClick={clearList}>
              Clear Items
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default GroceryBudApp;
