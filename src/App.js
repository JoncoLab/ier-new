import React, { Component } from 'react';
import './App.css';
import { Header } from "./comp/Header";
import { Main } from "./comp/Main";
import { Footer } from "./comp/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Main/>
          <Footer/>
      </div>
    );
  }
}

export default App;
