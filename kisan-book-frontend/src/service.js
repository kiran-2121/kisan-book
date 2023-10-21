import axios from "axios";


const token = localStorage.getItem("token");

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
      `${process.env.REACT_APP_baseUrl}/api/seller/getsellers?userId=65242ffa0d6c9470fe8f62a8&page=1&limit=10`);
    return response.data;
  },

  addSeller: async (data) => {
    const response = await axios.post(
      `${process.env.REACT_APP_baseUrl}/api/seller/addseller`, 
      data,{headers: { 'Authorization': token}} 
    );
    return response.data;
  },

  deleteSeller: async (id) => {
    const response = await axios.delete(
      `${process.env.REACT_APP_baseUrl}/api/seller/deleteSeller?sellerId=${id}` 
    );
    return response.data;
  },


  getRecordForUpdate: async (id) => {
    const response = await axios.get(
      `${process.env.REACT_APP_baseUrl}/api/seller/getseller?sellerId=${id}` 
    );
    return response.data;
  },
};

export default ApiService;
