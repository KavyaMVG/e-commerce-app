import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { useClerk } from "@clerk/clerk-react";

import "./navbar.css";

const Navbar = ({ productCount, userName }) => {
  const { openSignIn } = useClerk();

  const handleSignIn = (e) => {
    openSignIn();
  };

  return (
    // <div>
    <div className="navbar">
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <div className="logo">
          <Link to="/" style={{ color: "#000" }}>
            <h1>Logo</h1>
          </Link>
        </div>
        <div>
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
                <Icon name="shopping cart" style={{ color: "#000" }} />

                <div
                  style={{
                    position: "absolute",
                    top: "38%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "#e50111",
                    fontWeight: "bold",
                    fontSize: ".6em",
                  }}
                >
                  {productCount}
                </div>
              </Icon.Group>
            </Link>
          </ul>
        </div>
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <div className="search">
          <input type="search" placeholder="Search...." />
        </div>
        <Button circular={true} onClick={handleSignIn}>
          <Icon name="user" style={{ color: "#000" }} />
          {userName}
        </Button>
      </div>
    </div>
    // </div>
  );
};

export default Navbar;
