import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Speedometer } from "react-bootstrap-icons";
import { PersonFillGear } from "react-bootstrap-icons";




const Sidebar = () => {


  return (
    <Nav defaultActiveKey="/home" className="flex-column">
    <Nav.Link className="square border-bottom" as={Link} to="/home">
      <Speedometer className="mx-1" size={22} /> DASHBOARD
    </Nav.Link>
    <Nav.Link as={Link} to="/home/seller">
      <PersonFillGear className="mx-1" size={22} /> SELLER
    </Nav.Link>
    <Nav.Link as={Link} to="/home/buyer">
      <PersonFillGear className="mx-1" size={22} /> BUYER
    </Nav.Link>
  </Nav>
  );
};

export default Sidebar;