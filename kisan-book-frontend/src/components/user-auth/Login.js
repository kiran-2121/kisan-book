// import "./Login.scss"
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import ApiService from "../../service";

const LoginForm = () => {
  const navigate = useNavigate();

  const [mNumber, setMNumber] = useState(null);
  const[error,setError] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const mobileNumber = { mobileNumber: mNumber };

    console.log(mobileNumber);

    ApiService.userLogin(mobileNumber)
      .then((response) => {
        console.log(response);
        navigate("/otp", { state: { mobile: mNumber } });
      })
      .catch((error)=>{
        if(error.response){
          console.log(error.response.data); 
          setError(error.response.data); 
          }
          else{
            console.log(error);
          }
      })
      

    // axios.post(`${process.env.REACT_APP_baseUrl}/api/auth/otp`, mobileNumber).then(
    //   (response) => {
    //     console.log(response.data);

    //     navigate('/otp',{ state: { mobile: mNumber } })
    //   },
    //   (error) => {
    //     console.log(error);

    //   }
    // );
  };



  return (
    <div className="row d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-4 col-sm-4">
        <div className="card ">
          <div className="card-body ">
            <h3 className="card-title text-center">Login</h3>
            <form onSubmit={onSubmit} >
              <div className="px-4">
                <label htmlFor="email" className="form-label ">
                  Mobile Number
                </label>
                <PhoneInput
                  placeholder="Enter phone number"
                  country={"in"}
                  value={mNumber}
                  onChange={setMNumber}
                />
                {error && <small className="text-danger">{error.message}</small>}
              </div>
              <div className="mt-4 pe-5 text-end ">
                <button  type="submit" className="btn btn-primary btn-block ">
                  Request OTP
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
