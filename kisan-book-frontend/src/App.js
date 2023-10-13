import React from 'react';
import './App.scss';
import { Routes,Route } from 'react-router-dom';
import LoginForm from './components/user-auth/Login';
import OtpInputs from './components/user-auth/OtpInput';
import Home from './components/home/Home';
import Seller from './components/seller/Seller';
import Buyer from './components/buyer/Buyer';

function App() {
  return (
    <div className='App'>
      <header >
        <Routes>
          <Route path='/' element={<LoginForm/>} />
          <Route path='/otp' element={<OtpInputs/>} />
          <Route path='/home' element={<Home/>} >
             <Route path='/home/seller' element={<Seller/>}/>
             <Route path='/home/buyer' element={<Buyer/>}/>
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
