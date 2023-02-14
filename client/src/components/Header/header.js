import React from "react";

import Navbar from "./navbar";
import { Carousel } from "react-bootstrap";

import { useAppContext } from "../../providers/appProvider";

import "./header.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Header = () => {
  const { data, switchLang } = useAppContext();

  return (
    <section className="header">
      <Carousel
        className="carousel"
        fade
        controls={false}
        keyboard={false}
        indicators={false}
      >
        <Carousel.Item interval={2500}>
          <img
            className="img img-fluid"
            src={require("../../Assets/slide_img_1.png")}
            alt="first carousel slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="img img-fluid"
            src={require("../../Assets/slide_img_2.png")}
            alt="second carousel slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="img img-fluid"
            src={require("../../Assets/slide_img_3.png")}
            alt="third carousel slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="img img-fluid"
            src={require("../../Assets/slide_img_4.png")}
            alt="fourth carousel slide"
          />
        </Carousel.Item>
      </Carousel>
      <Navbar data={data} switchLang={switchLang} />
      <div className="header-text">
        <div className="title">{data.header.a}</div>
        <div className="text">{data.header.b}</div>
        <div className="about-button">
          <a href="#about">{data.header.d}</a>
        </div>
        <div className="book-button">
          <a href="#book">{data.header.c}</a>
        </div>
      </div>
    </section>
  );
};

export default Header;
