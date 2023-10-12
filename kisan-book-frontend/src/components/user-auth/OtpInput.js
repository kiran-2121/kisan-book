import { useState } from "react";
import OtpInput from "react-otp-input";
import { useLocation,useNavigate } from "react-router-dom";
import "./Login.scss";
import ApiService from "../../service";

const OtpInputs = () => {
  const navigate=useNavigate();
  const location = useLocation();
  const mobile = location.state?.mobile;

  const [otp, setOtp] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    const mobileNumber = { mobile: mobile, otp: otp };

    ApiService.submitOtp(mobileNumber)
      .then((responce) => {
        console.log(responce);
        localStorage.setItem("token", responce.token);
        navigate('/')

      })
      .catch((error) => {
        console.log( error);
        
      });

    // axios.post(`${process.env.REACT_APP_baseUrl}/api/auth/verify`,mobileNumber )
    // .then(
    //   (response) => {
    //     console.log(response.data);
    //     localStorage.setItem("token", response.data.token);
    //   },
    //   (error) => {
    //     console.log(error);

    //   }
    // );
  };

  return (
    <div className="row d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-4 col-sm-6">
        <div className="card ">
          <div className="card-body">
            {/* <h3 className="card-title text-center">Enter OTP</h3> */}
            <p className="text-center">Please enter the OTP sent to <br/>{'+'+mobile} </p>

            <span>
              <div className="d-flex justify-content-center mt-4">
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderSeparator={<span className="p-2"> </span>}
                  renderInput={(props) => (
                    <input {...props} className="otp-input" />
                  )}
                />
              </div>
              <div className="mt-5 text-center">
                <button
                  onClick={onSubmit}
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={otp.length !== 4 ? true : false}
                >
                 Verify OTP
                </button>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpInputs;
