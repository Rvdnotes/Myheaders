import React from "react";
import { Breadcrumb } from "react-bootstrap";
import Mainpage from "./Pages/Mainpage";
const Navbar = () => {
  return (
    <>
      <div className="d-flex justify-content-end pd-1 ">
        <div className="nav">
          <h2>INDIAN TEMPLES</h2>
          <Breadcrumb className="nav1">
            <Breadcrumb.Item href="Home">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="About">About</Breadcrumb.Item>
            <Breadcrumb.Item href="Contact">contact</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <div className="center">
        <h5>OM NAMO SHIVAYA</h5>
      </div>
      <div>
        <Mainpage />
      </div>
    </>
  );
};

export default Navbar;
