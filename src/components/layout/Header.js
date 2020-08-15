//function based component for Header section
import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
    </header>
  );
}

const headerStyle = {
  //styling for header section
  backgroundColor: "#3939ac",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default Header;
