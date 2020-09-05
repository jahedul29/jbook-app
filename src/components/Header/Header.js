import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to="/home">
        <img
          src="https://img.icons8.com/cute-clipart/64/000000/j.png"
          alt="jbook-logo"
        />
      </Link>
      <span>Jbook</span>
    </header>
  );
};

export default Header;
