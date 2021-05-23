import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../../context";
import { FaArrowRight } from "react-icons/fa";
const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();

  const containerRef = useRef(null);

  // const [columns, setColumns] = useState("col-1");

  useEffect(() => {
    // setColumns("col-1");
    const submenu = containerRef.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    // if (links.length === 2) {
    //   setColumns("col-2");
    // }
    // if (links.length >= 3) {
    //   setColumns("col-3");
    // }
  }, [location, links]);
  return (
    <aside
      ref={containerRef}
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
    >
      <div className="submenu-center">
        {links.map((link, index) => {
          const { header, moreLinks } = link;
          return (
            <div className="links-container" key={index}>
              <h3>{header}</h3>
              {moreLinks.map((moreLink, index) => {
                const { label, icon, url, desc } = moreLink;
                return (
                  <a href={url} key={index} className="link-wrapper">
                    <span
                      className={`${
                        page === "products"
                          ? "icon-container icon-size"
                          : "icon-container"
                      }`}
                    >
                      <img src={icon} alt="" />
                    </span>
                    <span className="label-container">
                      <h5>
                        {label}{" "}
                        <FaArrowRight className="arrowRight"></FaArrowRight>
                      </h5>
                      <p>{desc}</p>
                    </span>
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
