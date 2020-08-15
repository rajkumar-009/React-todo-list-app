//function based component for Header section
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link to="/" style={linkStyle}>
        Home
      </Link>{" "}
      |{" "}
      <Link to="/about" style={linkStyle}>
        About
      </Link>
    </header>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none"
};

const headerStyle = {
  //styling for header section
  backgroundColor: "#3939ac",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default Header;
