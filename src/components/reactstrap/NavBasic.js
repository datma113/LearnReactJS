import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
const NavBasic = ({ list }) => {
  
  const reStyle = {
    color: "red"
  }

  const renderList = list.map((x) => (
    <NavItem>
      <NavLink style={reStyle} href="#"> {x} </NavLink>
    </NavItem>
  ));
  

  return (
    <div>
      <Nav>{renderList}</Nav>
    </div>
  );
};

export default NavBasic;
