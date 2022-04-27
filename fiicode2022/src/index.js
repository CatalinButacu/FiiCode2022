import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar';
import LoginPage from './Login'; 



const root = ReactDOM.createRoot(document.getElementById('root'));
let ok=0;   
switch(ok){
    case 1: 
        root.render(
            <React.StrictMode>  
                <LoginPage/>        
            </React.StrictMode>
            );break;
    case 2:
        root.render(
            <React.StrictMode>    
                <Navbar />
            </React.StrictMode>
        );break;
    default:
        root.render(
            <React.StrictMode>  
                <App />     
            </React.StrictMode>
        );break;

}   
   

    

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
