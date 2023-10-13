import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Header = () =>{
    const navigate=useNavigate();
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const logoutHandler = () =>{
        localStorage.removeItem("token")
        navigate('/')
    }
    return(
        <>        <nav className="navbar  navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to={"#"} className="navbar-brand" >Trader-Book</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                   <div className="collapse navbar-collapse" id="navbarColor01">  
                   </div>
                   <div className="text-end  mx-5">
                    <div className="btn btn-light">
                      <div onClick={handleShow}>
                         <i class="bi bi-box-arrow-right fa-6x"></i> <span className="mx-1">  Logout </span>
                      </div>
                    </div>
                </div>   
            </div>
       </nav>


       <Modal size="sm" show={show} onHide={handleClose} animation={false} >
        {/* <Modal.Header closeButton>
          <Modal.Title>Sign out</Modal.Title>
        </Modal.Header> */}
        <Modal.Body><p>Are you sure you want to sign out ?</p></Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-sm" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn btn-sm" variant="primary" onClick={logoutHandler}>
           sign out
          </Button>
        </Modal.Footer>
      </Modal>

       </>

    )

}

export default Header;