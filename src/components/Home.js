import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import projectsData from "./projectsData";

const Home = () => {
  return (
    <div className="home">
      {projectsData.map(project => {
        const { id, projectName, projectPageName } = project;
        return (
          <div key={id} className="home__projectInfoCard">
            <span className="home__badge">{id}</span>
            <Link to={`/${projectPageName}`} className="home__projectTitle">
              {projectName}
            </Link>
            <Link to={`/${projectPageName}`} className="home__projectInfoBtn">
              View Project
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
