import axios from "axios";

const ApiService = {
  userLogin: async (data) => {
    const response = await axios.post(
      `${process.env.REACT_APP_baseUrl}/api/auth/otp`,
      data
    );
    return response.data;
  },
  submitOtp: async (data) => {
    const response = await axios.post(
      `${process.env.REACT_APP_baseUrl}/api/auth/verify`,
      data
    );
    return response.data;
  },
};

export default ApiService;
