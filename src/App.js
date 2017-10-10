import React, { Component } from 'react';
import './App.css';
import { Header } from "./comp/Header";
import { Main } from "./comp/Main";
import { Footer } from "./comp/Footer";
import { ContactsBlock } from "./comp/Footer/Contacts/ContactsBlock";
import { DownloadBlock } from "./comp/Footer/Download/DownloadBlock";
import { SubscribeBtn } from "./comp/SubscribeBtn";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Main/>
          <Footer/>
          <ContactsBlock/>
          <DownloadBlock/>
      </div>
    );
  }
}

export default App;
