// import "./Login.scss"
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {

  const navigate=useNavigate();

  const [mNumber,setMNumber]=useState();
 

  const onSubmit = (e) => {
    e.preventDefault();
    const mobileNumber = { mobileNumber: mNumber };

    console.log(mobileNumber);

    axios.post(`${process.env.REACT_APP_baseUrl}/user/otp`, mobileNumber).then(
      (response) => {
        console.log(response.data);

        navigate('/otp',{ state: { mobile: mNumber } })
      },
      (error) => {
        console.log(error);
       
      }
    );
  };


  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card m-4">
        <div className="card-body p-4">
          <h3 className="card-title text-center">Login</h3>
          <form className='mt-4' onSubmit={onSubmit}>
            <div className="px-4">
              <label htmlFor="email" className="form-label ">
               Mobile Number
              </label>
              <PhoneInput
                placeholder="Enter phone number"
                country={'in'}
                value={mNumber}
                onChange={setMNumber}
              />
            </div>
            <div className='mt-4 pe-4 text-end '>    
              <button  type="submit" className="btn btn-primary btn-block ">
                Send OTP
              </button>
            </div>

            </form>
        </div>
      </div>
    </div>
  );
};



export default LoginForm;