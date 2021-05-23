import React from "react";
import { FaBars, FaArrowRight, FaChevronRight } from "react-icons/fa";
import { useGlobalContext } from "../../context";
// import logo from "./images/logo.svg";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = e => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = e => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          {/* <img src={logo} alt="stripe" className="nav-logo" /> */}
          <h1 className="nav-logo">stripe</h1>
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars></FaBars>
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              use cases
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
          <li>
            <button className="link-btn">pricing</button>
          </li>
        </ul>
        <button className="btn btn-signin">
          Sign in <FaChevronRight className="chevronRight"></FaChevronRight>
          <FaArrowRight className="arrowRight"></FaArrowRight>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
