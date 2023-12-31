import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.css';
 import 'bootswatch/dist/lumen/bootstrap.min.css'; // Added this :boom:
 import ThemeProvider from 'react-bootstrap/ThemeProvider'



// import "~bootswatch/dist/slate/variables";
// import "~bootstrap/scss/bootstrap";
// import "~bootswatch/dist/slate/bootswatch";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider
         breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
         minBreakpoint="xxs" 
     >
         <App />
   </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
