import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Nav = () => {

  const navStyle = {
    color: 'rgb(214, 199, 178)',
    'text-decoration': 'none',
  }

  return (
      <nav>
        <h3>STORE</h3>
        <ul>
          <li>
            <Link style={navStyle} to="/">Home</Link>
          </li>
          <li>
            <Link style={navStyle} to="/about">About</Link>
          </li>
          <li>
            <Link style={navStyle} to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Nav;
