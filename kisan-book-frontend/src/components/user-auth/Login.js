// import "./Login.scss"
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import ApiService from "../../service";
import Modal from "react-bootstrap/Modal";

const LoginForm = () => {
  const navigate = useNavigate();

  const [mNumber, setMNumber] = useState(null);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  const showSuccess = () => {
    setShow(true);
    setTimeout(() => {
      navigate("/otp", { state: { mobile: mNumber } });
    }, 2000);
  };

  const handlePhoneChange = (value) => {
    setError(null);

    setMNumber(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const mobileNumber = { mobileNumber: mNumber };

    const phoneNumberRegex = /^[0-9]{12}$/;

    if (!phoneNumberRegex.test(mNumber)) {
      setError({ message: "Please enter a valid mobile number." });
    } else {
      ApiService.userLogin(mobileNumber)
        .then((response) => {
          console.log(response);
          showSuccess();
          // navigate("/otp", { state: { mobile: mNumber } });
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            setError(error.response.data);
          }
        });
    }

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
    <>
      <div className="row d-flex justify-content-center align-items-center vh-100">
        <div className="col-md-4 ">
          <div className="card ">
            <div className="card-body ">
              <h3 className="card-title text-center">Login</h3>
              <form onSubmit={onSubmit}>
                <div className="px-4">
                  <label htmlFor="email" className="form-label ">
                    Mobile Number
                  </label>
                  <PhoneInput
                    placeholder="Enter phone number"
                    name="phone"
                    country={"in"}
                    value={mNumber}
                    onChange={handlePhoneChange}
                    inputStyle={{
                      borderColor: error ? "red" : "",
                    }}
                  />
                  {error && (
                    <small className="text-danger">{error.message}</small>
                  )}
                </div>
                <div className="mt-4 pe-5 text-end ">
                  <button type="submit" className="btn btn-primary btn-block ">
                    Request OTP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Modal size="sm" show={show} animation={false}>
        <Modal.Body >
          <p className="text-center">Verification code sent to {'+' + mNumber}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginForm;
