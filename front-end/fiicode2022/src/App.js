import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
        <i>App in construction...</i><br/>
        <p>Proba WebDev | FiiCode 2022</p>
        <p>Echipa: Paul&Catalin</p>     
      </header>
    </div>
  );
}

function section(){
  return(
    <div>
      <p>Sectiune noua</p>
    </div>
  )
}


export default App;

