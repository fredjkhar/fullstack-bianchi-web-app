import React, { useState } from "react";

import "./navbar.scss";

const Navbar = ({ data, switchLang }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <nav>
        <div className="nav_brand">
          <img src={require("../../Assets/logo.png")} alt="logo" />
          <h1>bianchi</h1>
          <span>professional</span>
        </div>
        <ul className="nav_list-center">
          <li>{data.navbar.a}</li>
          <li>{data.navbar.b}</li>
          <li>{data.navbar.c}</li>
          <li>{data.navbar.d}</li>
        </ul>
        <ul className="nav_list-right">
          <li onClick={switchLang}>{data.lang}</li>
          <li
            className={"burger " + (expanded ? "expanded" : "")}
            onClick={() => setExpanded(!expanded)}
          >
            <div></div>
          </li>
        </ul>
      </nav>
      <div className={"dr-menu-item-1 " + (!expanded ? "expanded" : "")}>
        {data.navbar.d}
      </div>
      <div className={"dr-menu-item-2 " + (!expanded ? "expanded" : "")}>
        {data.navbar.a}
      </div>
      <div className={"dr-menu-item-3 " + (!expanded ? "expanded" : "")}>
        {data.navbar.b}
      </div>
      <div className={"dr-menu-item-4 " + (!expanded ? "expanded" : "")}>
        {data.navbar.c}
      </div>
    </>
  );
};

export default Navbar;
