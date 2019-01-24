import React, { Component } from 'react';
import logo from './logo.svg';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import './styles/App.css';
import './styles/Body.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            title: 'First App',
            text: 'Just testing'
        }
    }
  render() {

    return (
      <div className="App">
        <Header/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.text}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.title}
          </a>
        </header>
        <Body/>
        <Footer/>
      </div>
    );
  }
}
export default App;
