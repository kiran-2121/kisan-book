import { useState } from "react";
import OtpInput from "react-otp-input";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Login.scss";

const OtpInputs = () =>{
    const location =useLocation();
    const mobile=location.state;
    
    console.log(mobile);

    const [otp,setOtp]=useState();

    const onSubmit = (e) =>{
        e.preventDefault();
        const mobileNumber={mobile:mobile.mobile,otp:otp}
       
    axios.post(`${process.env.REACT_APP_baseUrl}/user/verify`,mobileNumber )
    .then(
      (response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
      },
      (error) => {
        console.log(error);
       
      }
    );

    }

    return(
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-4">
              <div className="card ">
            <div className="card-body p-4 ">
              <h3 className="card-title text-center">Enter OTP</h3>
              
              <span>
                <div className="d-flex justify-content-center mt-4">
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderSeparator={<span className="p-1"> </span>}
                    renderInput={(props) => 
                      <input {...props} className="otp-input" />}
                  />
                </div>
                <div className='mt-4 text-center'>    
                  <button onClick={onSubmit} type="submit" className="btn btn-primary btn-block">
                    Verify
                  </button>
                </div>
              </span>
            </div>
          </div>
          </div>

      </div>
    )

}

export default OtpInputs;


