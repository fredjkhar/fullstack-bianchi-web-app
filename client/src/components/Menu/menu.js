import React from "react";

import "./menu.scss";

import { useAppContext } from "../../providers/appProvider";

const Menu = () => {
  const { data } = useAppContext();
  return (
    <section className="menu" id="menu">
      <div className="wrapper">
        <div className="left-section">
          <h3 className="left-section-title">{data.menu.a}</h3>
          <div className="grid">
            <span>{data.menu.b}</span>
            <span>$45</span>
            <span>{data.menu.c}</span>
            <span>$35</span>
            <span>{data.menu.d}</span>
            <span>$35</span>
            <span>{data.menu.e}</span>
            <span>$60</span>
            <span>{data.menu.f}</span>
            <span>$80</span>
          </div>
        </div>
        <img src={require("../../Assets/scissors.png")} alt="scissors"></img>
        <div className="right-section">
          <h3 className="left-section-title">{data.menu.b}</h3>
          <div className="grid">
            <span>{data.menu.g}</span>
            <span>$30</span>
            <span>{data.menu.h}</span>
            <span>$40</span>
            <span>{data.menu.i}</span>
            <span>$55</span>
            <span>{data.menu.j}</span>
            <span>$25</span>
            <span>{data.menu.k}</span>
            <span>$35</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
