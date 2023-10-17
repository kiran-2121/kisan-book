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

  fatchSellers: async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_baseUrl}/api/seller/getsellers?userId=652a9431a344a3687d3c8ff6&page=1&limit=3`);
    return response.data;
  }
};

export default ApiService;
