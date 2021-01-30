import React from "react";
import { Container } from "reactstrap";
import "../css/Shopnav.css";

import NavBasic from "./reactstrap/NavBasic";
const ShopNav = () => {
  const list = ["home", "user", "about", "contact"];

  return (
    <div>
      <div className="nav-container">
        <Container>
          <NavBasic list={list} />
        </Container>
      </div>
    </div>
  );
};

export default ShopNav;
