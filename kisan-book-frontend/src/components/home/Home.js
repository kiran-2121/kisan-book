import Header from "./Header";
import { useState } from "react";
 import Sidebar from "./Sidebar";
import { Container, Row, Col, Nav,Button } from "react-bootstrap";
import { Outlet, } from "react-router-dom";

const Home = () => {


  const [sidebarOpen, setSidebarOpen] = useState(false);

    // const toggleSidebar = () => {
    //   setSidebarOpen(!sidebarOpen);
    // };

  
  
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div>
        <Container fluid className={`sidebar-container`}>
          <Row >
           
          <Col xs={4} lg={2}   className="d-none d-md-block sidebar square border border-start-0 bg-light vh-100">
              <Sidebar/>
         </Col>
           
         <Col xs={4} lg={10} className="content bg-white">
         {/* <Button onClick={toggleSidebar}>
            {sidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
          </Button> */}
              <Outlet />
         </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
