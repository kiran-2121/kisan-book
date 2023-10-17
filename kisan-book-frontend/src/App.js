import React, { useEffect } from 'react';
import './App.scss';
import { Routes,Route, useNavigate } from 'react-router-dom';
import LoginForm from './components/user-auth/Login';
import OtpInputs from './components/user-auth/OtpInput';
import Home from './components/home/Home';
import Seller from './components/seller/Seller';
import Buyer from './components/buyer/Buyer';
import AddSeller from './components/seller/AddSeller';

const token = localStorage.getItem("token");


function App() {
  const navigate = useNavigate();
 
  useEffect(()=>{
    if(!token){
      navigate("/login");
    }
    },[token]);

  return (
    <div className='App'>
      <header >
        <Routes>
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/otp' element={<OtpInputs/>} />
          <Route path='/home' element={<Home/>} >
             <Route path='/home/seller' element={<Seller/>}/>
             <Route path='/home/add-seller' element={<AddSeller/>}/>
             <Route path='/home/buyer' element={<Buyer/>}/>
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
