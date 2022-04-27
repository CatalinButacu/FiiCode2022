import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <i id="txt">App in construction...</i><br />
        <p>Proba WebDev | FiiCode 2022</p>
        <p><span>Echipa: Paul&Catalin</span></p>
      </header>
    </div>
  );
}

export default App;

/*
class Apps extends React.Component {
    render() {
        return (
            <div>
                <Header username="user" />
                <Greeting />
            </div>
        )
    }
}
class Header extends React.Component {
    render() {
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}
class Greeting extends React.Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}
*/