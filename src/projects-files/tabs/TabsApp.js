import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./TabsApp.css";
const url = "https://course-api.com/react-tabs-project";

const TabsApp = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <div className="tabsApp">
        <section className="section loading">
          <h1>Loading...</h1>
        </section>
      </div>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <div className="tabsApp">
      <section className="section">
        <div className="title">
          <h2>expierence</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </div>
  );
};

export default TabsApp;
