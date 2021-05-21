import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../../context";
import { links } from "../data";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes></FaTimes>
        </button>
      </div>
      <ul className="links">
        {links.map(link => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <Link to={url} onClick={closeSidebar}>
                {icon}
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
