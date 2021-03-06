import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Nav = () => {
  const navStyle = {
    color: "rgb(214, 199, 178)",
    "textDecoration": "none",
  };

  return (
    <nav>
      <h3>DARKNET STORE</h3>
      <ul>
        <li>
          <Link style={navStyle} to="/shopping-cart/">
            Home
          </Link>
        </li>
        <li>
          <Link style={navStyle} to="/shopping-cart/about">
            About
          </Link>
        </li>
        <li>
          <Link style={navStyle} to="/shopping-cart/shop">
            Shop
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
