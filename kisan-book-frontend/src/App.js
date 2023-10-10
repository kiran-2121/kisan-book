import React from 'react';
import './App.scss';
import { Routes,Route } from 'react-router-dom';
import LoginForm from './components/user-auth/Login';
import OtpInputs from './components/user-auth/OtpInput';
import Home from './components/home/Home';

function App() {
  return (
    <div className='App'>
      <header >
        <Routes>
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/otp' element={<OtpInputs/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
