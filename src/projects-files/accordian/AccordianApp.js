import React from "react";

import pushpin from "./pushpin.png";
import data from "./data";
import "./AccordianApp.css";
import Question from "./Question";

const AccordianApp = () => {
  return (
    <div className="accordianApp">
      <main>
        <div className="container">
          <img src={pushpin} alt="" className="pushpin-icon" />
          <div>
            <h3>FAQs about login</h3>
          </div>
          <section className="info">
            {data.map(question => {
              return <Question key={question.id} {...question}></Question>;
            })}
          </section>
        </div>
      </main>
    </div>
  );
};

export default AccordianApp;
