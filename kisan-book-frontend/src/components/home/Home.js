import Header from "./Header";
// import Sidebar from "./Sidebar";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import { Speedometer } from "react-bootstrap-icons";
import { PersonFillGear } from "react-bootstrap-icons";

const Home = () => {

  
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div>
        <Container fluid className={`sidebar-container`}>
          <Row>
           
            <Col
              sm={3}
              md={2}
              className="d-sm-none d-md-block sidebar square border border-start-0 bg-light vh-100 "
            >
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
            </Col>
           
            <Col sm={9} md={10} className="content bg-white">
              
              <Outlet />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
