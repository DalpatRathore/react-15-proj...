import React, { useState } from "react";
import "./BirthdayRemindarApp.css";
import data from "./data";
import List from "./List";
const BirthdayRemindarApp = () => {
  const [people, setPeople] = useState(data);
  return (
    <div className="birthdayRemindarApp">
      <main>
        <section className="container">
          <h3>{people.length} Birthday Remindar</h3>
          <List people={people}></List>
          <button className="btn-clearAll" onClick={() => setPeople([])}>
            Clear All
          </button>
        </section>
      </main>
    </div>
  );
};

export default BirthdayRemindarApp;
