import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import { Row, Col,Button } from "react-bootstrap";
import { PencilFill } from "react-bootstrap-icons";
import { Trash3 } from "react-bootstrap-icons";
import { CashCoin } from "react-bootstrap-icons";
import { PersonFillAdd } from "react-bootstrap-icons";
import ApiService from "../../service";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";


const Seller = () => {
  const [sellers, setSellers] = useState(null);
  const [response,setResponse] = useState();
  const navigate = useNavigate();

  const [id,setId]=useState(null);
  const [show, setShow] = useState(false);


  const showDeleteModel = (event) => {
    
    setId(event.currentTarget.id)
    setShow(true);
    
  };

  const updateSeller = (event) => {
   const id= event.currentTarget.id;
    navigate('/home/add-seller', { state: { id: id } });
    
  };

  const showUserInfo = () => {
    ApiService.fatchSellers().then(
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
      showUserInfo();
  }, [response]);

  const addSeller = () => {
    navigate("/home/add-seller");
  };

  const deleteSeller = () =>{
  
    ApiService.deleteSeller(id).then(
      (response) => {
        console.log(response);
        setResponse(response);
        setShow(false);
      },
      (error) => {
        console.log(error);
      }
    );
    
  }

 const handleClose = () =>{
  setShow(false);
 }

  return (
    <>
      <div>
        {/* <h1 className="text-center">SELLER</h1> */}
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
              <PersonFillAdd size={20} /> Add
            </button>
          </div>
        </div>

        <Row className="justify-items-center">
          {sellers?.map((seller) => (
            <Col md={4} sm={12} xs={12}>
              <Card
                key={seller.id}
                // bg={"light"}
                text={"dark"}
                style={{ borderBottom: "2px solid #ccc"}}
                className="mb-4 "
              >
                <Card.Header className="border-0">
                  <b>
                    {seller.firstName} {seller.middleName} {seller.lastName}
                  </b>
                </Card.Header>

                <Card.Body>
                  <Card.Text>
                    <p>
                      Mob:
                      <span className="ms-1">
                        {seller.primaryMobileNumber}
                        <button id={seller._id} onClick={updateSeller} className="float-end">
                          <PencilFill size={10} className="text-primary" />
                        </button>
                      </span> / 
                      <span className="ms-1">
                        {seller.secondaryMobileNumber}{" "}
                      </span>
                    </p>

                    <p className="mb-0">
                      {seller.address.address1},{" "}
                      <button id={seller._id} onClick={showDeleteModel} className="float-end">
                        <Trash3  size={10} className="text-primary" />
                      </button>
                    </p>
                    <p className="mb-0">
                      {seller.address.location}, <br /> {seller.address.city},
                      {seller.address.pinCode}.
                      <button className="float-end">
                        <CashCoin size={10} className="text-primary" />
                      </button>
                      
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Modal size="sm" show={show} animation={false}>
        <Modal.Body>
          <p className="text-center">
          Do you want to delete ? 
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={deleteSeller}>
           Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Seller;
