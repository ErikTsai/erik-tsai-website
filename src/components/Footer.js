import React from "react";
import { Instagram } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="/">
          <Instagram />
        </Link>
        <Link to="/">
          <Twitter />
        </Link>
        <Link to="/">
          <Facebook />
        </Link>
        <Link to="/">
          <LinkedIn />
        </Link>
      </div>
      <p className="copyright"> &copy; 2023 Erik Tsai. </p>
    </div>
  );
}

export default Footer;
