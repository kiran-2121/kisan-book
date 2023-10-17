import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import {  PencilFill } from "react-bootstrap-icons";
import {Trash3} from "react-bootstrap-icons";
import {CashCoin} from "react-bootstrap-icons";
import {PersonFillAdd} from "react-bootstrap-icons";
import ApiService from "../../service";
import { useNavigate } from "react-router-dom";



const Seller = () => {
  const [sellers, setSellers] = useState(null);
  const navigate =useNavigate();

  const showUserInfo = () => {
   ApiService.fatchSellers()
      .then(
        (response) => {
          console.log(response);
          setSellers(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {
    if (!sellers) {
      showUserInfo();
    }
  }, [sellers]);

  const addSeller = () => {
    navigate('/home/add-seller')
  };

  return (
    <>
    <div>
      <h1 className="text-center">SELLER</h1>
      <div className="text-end my-4">
          <div
            className="btn-group mx-3"
            role="group"
            aria-label="Basic example"
          >
            <button
              onClick={addSeller}
              type="button"
              className="btn btn-primary"
            >
              <PersonFillAdd size={20}/> Add
            </button>
           
          </div>
        </div>
      <div>
        <Row className="justify-content-center">
          {sellers?.map((seller) => (
            <Col md={4} sm={12}>
              <Card
                key={seller.id}
                bg={"light"}
                text={"dark"}
                style={{ width: "20rem" }}
                className="mb-2"
              >
                {/* <Card.Header>Header</Card.Header> */}
                <Row>
                <Col sm={6} md={9}>
                  <Card.Body>
                    <Card.Title>
                      {seller.firstName} {seller.middleName} {seller.lastName}
                    </Card.Title>
                    <Card.Text>
                      <p>
                       {/* <Phone/> */}
                        Mob : {seller.primaryMobileNumber},<br/>  
                       <span className="ms-4"><span> </span>  {seller.secondaryMobileNumber}</span>
                      </p>
                      <p>
                        {seller.address.address1}, <br />
                        {seller.address.location}, <br /> {seller.address.city}
                        ,{seller.address.pinCode}.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col sm={6} md={3} className="text-center  mt-3">
                    <div className="my-3">
                     <button ><PencilFill size={25}/></button><br/>
                    </div>
                    <div className="my-3">
                    <button ><Trash3 size={25}/></button><br/>
                    </div>
                    <div className="my-3">
                    <button ><CashCoin size={25}/></button><br/>
                    </div>
                </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
    </>
  );
};

export default Seller;
