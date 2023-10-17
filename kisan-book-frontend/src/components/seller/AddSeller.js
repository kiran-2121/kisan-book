import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function AddSeller() {
  const [validated, setValidated] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile1, setMobile1] = useState('');
  const [mobile2, setMobile2] = useState('');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pinCode, setPinCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const sellerInfo ={
        firstName:firstName,
        middleName:middleName,
        lastName:lastName,
        mobile1:mobile1,
        mobile2:mobile2,
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
        console.log(sellerInfo)
    }

    
    
   
    

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className='my-4'>
            <h3 className='text-center'>Add Seller</h3>
        </div>
      <Row className="my-3 ">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
           className="p-1"
            required
            type="text"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Middle name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Middle name"
            onChange={(e) => setMiddleName(e.target.value)}

           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}

          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="my-3 ">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Mobile number 1</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Mobile number"
            onChange={(e) => setMobile1(e.target.value)}

          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Mobile number 2</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Mobile number"
            onChange={(e) => setMobile2(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" required  
           onChange={(e) => setAddress(e.target.value)}
 />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Location" required 
           onChange={(e) => setLocation(e.target.value)}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required
           onChange={(e) => setCity(e.target.value)} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required 
           onChange={(e) => setState(e.target.value)} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" placeholder="Country" required 
           onChange={(e) => setCountry(e.target.value)} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Pin code</Form.Label>
          <Form.Control type="text" placeholder="Pin code" required 
            onChange={(e) => setPinCode(e.target.value)}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid pin code.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <div className='text-end my-4'>    
         <Button type="submit">Submit form</Button>
      </div>
    </Form>
  );
}

export default AddSeller;