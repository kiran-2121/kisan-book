import React, { useState } from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  

  return (
    <Container fluid className={`sidebar-container ${expanded ? 'expanded' : 'collapsed'}`}>
      <Row>
        <Col sm={3} md={2} className="sidebar square border border-start-0 vh-100 ">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Col>
        <Col sm={9} md={10} className="content">
          {/* Your main content goes here */}
          <p>Main Content</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;