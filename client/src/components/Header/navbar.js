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
          <li>
            <a href="#about">{data.navbar.a}</a>
          </li>
          <li>
            <a href="#menu">{data.navbar.b}</a>
          </li>
          <li>
            <a href="#book">{data.navbar.d}</a>
          </li>
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
      <a href="#about">{data.navbar.a}</a>
      </div>
      <div className={"dr-menu-item-2 " + (!expanded ? "expanded" : "")}>
      <a href="#menu">{data.navbar.b}</a>
      </div>
      <div className={"dr-menu-item-3 " + (!expanded ? "expanded" : "")}>
      <a href="#book">{data.navbar.d}</a>
      </div>
    </>
  );
};

export default Navbar;
