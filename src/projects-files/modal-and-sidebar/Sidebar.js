import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { links, social } from "./data";
import logo from "./logo.svg";
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
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map(link => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
