import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { useClerk } from "@clerk/clerk-react";

import "./navbar.css";

const Navbar = ({ productCount }) => {
  const { openSignIn } = useClerk();

  const handleSignIn = (e) => {
    openSignIn();
  };

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

          <Link to="/cart">
            <Icon.Group size="big">
              <Icon name="shopping cart" />

              <div
                style={{
                  position: "absolute",
                  top: "38%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "red",
                  fontWeight: "bold",
                  fontSize: ".6em",
                }}
              >
                {productCount}
              </div>
            </Icon.Group>
          </Link>
        </ul>

        <div className="search">
          <input type="search" placeholder="Search...." />
        </div>
        <Button circular={true} onClick={handleSignIn}>
          <Icon name="user" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
