import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../modal-and-sidebar/context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();

  const containerRef = useRef(null);

  const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    setColumns("col-2");
    const submenu = containerRef.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.lenght === 3) {
      setColumns("col-3");
    }
    if (links.lenght > 4) {
      setColumns("col-4");
    }
  }, [location, links]);
  return (
    <aside
      ref={containerRef}
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
