import React from "react";
import { Link } from "react-router-dom";
import Main from "../Main/Main";

import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <ul className="list">
          <Link to="/women">
            <li>Women</li>
          </Link>
          <Link to="/man">
            <li>Man</li>
          </Link>
          <Link to="/home">
            <li>Home</li>
          </Link>
        </ul>
        <div className="search">
          <input type="search" placeholder="Search...." />
        </div>
      </div>
      <Main />
    </div>
  );
};

export default Navbar;
