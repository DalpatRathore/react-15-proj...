import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "../data";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  // const linksContainerRef = useRef(null);
  // const linksRef = useRef(null);

  // useEffect(() => {
  //   const linksHeight = linksRef.current.getBoundingClientRect();
  //   if (showLinks) {
  //     linksContainerRef.current.style.height = `${linksHeight.height}px`;
  //   } else {
  //     linksContainerRef.current.style.height = "0px";
  //   }

  //   return () => {};
  // }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/navbar">
            <img src={logo} alt="" />
          </Link>

          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            {showLinks ? (
              <FaTimes className="close"></FaTimes>
            ) : (
              <FaBars className="open"></FaBars>
            )}
          </button>
        </div>

        <div
          className={`links-container ${showLinks && "show-links-container"}`}
        >
          <ul className="links">
            {links.map(link => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url} onClick={() => setShowLinks(!showLinks)}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
