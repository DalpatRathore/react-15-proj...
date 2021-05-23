import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import sublinks from "./data";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes></FaTimes>
        </button>

        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h1 className="sidebar-heading">{page}</h1>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { moreLinks } = link;
                    return (
                      <React.Fragment key={index}>
                        {moreLinks.map((moreLink, index) => {
                          const { label, icon, url } = moreLink;
                          return (
                            <a
                              href={url}
                              key={index}
                              className="sidebar-link-wrapper"
                            >
                              <span className="sidebar-icon-container">
                                <img src={icon} alt="" />
                              </span>
                              <span className="sidebar-label-container">
                                <h5>
                                  {label}{" "}
                                  <FaArrowRight className="arrowRight"></FaArrowRight>
                                </h5>
                              </span>
                            </a>
                          );
                        })}
                      </React.Fragment>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
        <div className="btn-wrapper">
          <button className="btn sidebar-btn-signin">
            Sign in <FaChevronRight className="chevronRight"></FaChevronRight>
            <FaArrowRight className="arrowRight"></FaArrowRight>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
