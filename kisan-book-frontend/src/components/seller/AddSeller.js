import { useState,useEffect } from 'react';
import './seller.scss'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ApiService from "../../service";
import Card from 'react-bootstrap/Card';
import { useNavigate ,useLocation} from 'react-router-dom';



function AddSeller() {
  const navigate = useNavigate();
  const locations = useLocation();

  const [sellerData,setSellerData] = useState();
  const [validated, setValidated] = useState(false);
  const [recordId,setRecordId] = useState(0);

  const [firstName, setFirstName] = useState(sellerData?.firstName);
  const [middleName, setMiddleName] = useState();
  const [lastName, setLastName] = useState();
  const [mobile1, setMobile1] = useState();
  const [mobile2, setMobile2] = useState();
  const [address, setAddress] = useState();
  const [location, setLocation] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();
  const [pinCode, setPinCode] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const sellerInfo ={
        firstName:firstName,
        middleName:middleName,
        lastName:lastName,
        primaryMobileNumber:mobile1,
        secondaryMobileNumber:mobile2,
        address1:address,
        location:location,
        city:city,
        state:state,
        country:country,
        pinCode:pinCode

    }
   
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
     
    }else{
        addSeller(sellerInfo);
    }  

    setValidated(true);
  };

  const addSeller = (sellerInfo) =>{

    ApiService.addSeller(sellerInfo)
    .then((response) => {
      console.log(response);
        navigate("/home/seller")
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        
      }
    });

  }

  const getRecordForUpdate = (id) =>{
    ApiService.getRecordForUpdate(id)
    .then((response) => {
      console.log(response);
      setSellerData(response);
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        
      }
    });
  }



  useEffect(() => {
    if (locations.state?.id) {
      setRecordId(locations.state.id);
    }
  }, [locations.state]);

  useEffect(() => {
    if (recordId != 0) {
      getRecordForUpdate(recordId);
    }
  }, [recordId]);


  return (
    <div className=' d-flex justify-content-center align-items-center'>
    <Card style={{ width: '50rem' }} className='m-3 px-4 ' >
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className='my-4'>
            <h3 className='text-center'>Add Seller</h3>
        </div>
       
      <Row className="my-3 justify-content-center">
        <Form.Group required as={Col} md="4" controlId="validationCustom01">
          <Form.Label >
            First name<span className="text-danger"> *</span>
          </Form.Label>
          <Form.Control
            required
            type="text"
            defaultValue={firstName}
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label> 
             Middle name<span className="text-danger"> * </span>
            </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Middle name"
            onChange={(e) => setMiddleName(e.target.value)}
            
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>
             Last name<span className="text-danger"> *</span>
            </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
           

          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="my-3 justify-content-center ">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>
             Primary mobile number<span className="text-danger"> *</span>
            </Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Primary mobile number"
            onChange={(e) => setMobile1(e.target.value)}

          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Secondary mobile number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Secondary mobile number"
            onChange={(e) => setMobile2(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="my-3   justify-content-center">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label> 
             Address<span className="text-danger"> *</span>
            </Form.Label>
          <Form.Control type="text" placeholder="Address" required  
           onChange={(e) => setAddress(e.target.value)}
 />
          <Form.Control.Feedback type="invalid">
            Please provide a valid address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>
             Location<span className="text-danger"> *</span>
            </Form.Label>
          <Form.Control type="text" placeholder="Location" required 
           onChange={(e) => setLocation(e.target.value)}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid location.
          </Form.Control.Feedback>
        </Form.Group>
        
      </Row>
      <Row className="mb-3 justify-content-center">
      <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>
             City<span className="text-danger"> *</span>
            </Form.Label>
          <Form.Control type="text" placeholder="City" required
           onChange={(e) => setCity(e.target.value)} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>
            State<span className="text-danger"> *</span>
          </Form.Label>
          <Form.Control type="text" placeholder="State" required 
           onChange={(e) => setState(e.target.value)} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3 justify-content-center"  >
      <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>
             Country<span className="text-danger"> *</span>
            </Form.Label>
          <Form.Control type="text" placeholder="Country" required 
           onChange={(e) => setCountry(e.target.value)} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid country.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>
            Pin code<span className="text-danger"> *</span>
            </Form.Label>
          <Form.Control type="number" placeholder="Pin code" required 
            onChange={(e) => setPinCode(e.target.value)}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid pin code.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <div className='text-end my-4 '>    
         <Button type="submit">Add Seller</Button>
      </div>
      
    </Form>
    </Card>
    </div>
    
  );
}

export default AddSeller;