import React, { useState } from "react";
import data from "./data";
import "./AccordianApp.css";
import SingleQuestion from "./Question";
const AccordianApp = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="accordianApp">
      <main>
        <div className="container">
          <h3>questions and answers about login</h3>
          <section className="info">
            {questions.map(question => {
              return (
                <SingleQuestion
                  key={question.id}
                  {...question}
                ></SingleQuestion>
              );
            })}
          </section>
        </div>
      </main>
    </div>
  );
};

export default AccordianApp;
