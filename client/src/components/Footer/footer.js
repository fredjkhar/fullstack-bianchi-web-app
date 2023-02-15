import React from "react";

import "./footer.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <section className="footer">
      <div className="wrapper">
        <div>© 2015-2023 All Rights Reserved</div>
        <div>
          <a href="https://www.facebook.com/">
            <FacebookIcon
              sx={{
                width: "40px",
                height: "40px",
                color: "white",
                padding: "5px",
              }}
            />
          </a>
          <a href="https://www.instagram.com/">
            <InstagramIcon
              sx={{
                width: "40px",
                height: "40px",
                color: "white",
                padding: "5px",
              }}
            />
          </a>
          <a href="https://twitter.com/?lang=en">
            <TwitterIcon
              sx={{
                width: "40px",
                height: "40px",
                color: "white",
                padding: "5px",
              }}
            />
          </a>
        </div>

        <div className="github">
          <a href="https://github.com/fredjkhar">
            <GitHubIcon
              sx={{
                width: "40px",
                height: "40px",
                color: "white",
                padding: "5px",
              }}
            />
          </a>
          Source code
        </div>
      </div>
    </section>
  );
};

export default Footer;
