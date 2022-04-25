import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

class Apps extends React.Component {
  render() {
      return (
          <div>
              <Header username="bobziroll" />
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

ReactDOM.render(<Apps />, document.getElementById("section1"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
