import React, { Component } from 'react';
import './App.css';
import { Header } from "./comp/Header";
import { Main } from "./comp/Main";
import { Footer } from "./comp/Footer";
import { ContactsBlock } from "./comp/Footer/Contacts/ContactsBlock";
import { DownloadBlock } from "./comp/Footer/Download/DownloadBlock";
import { SubscribeBtn } from "./comp/SubscribeBtn";
import { Preloader } from "./comp/Preloader";
import * as $ from "jquery";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false
        };

        this.appLoad = this.appLoad.bind(this);
    }

    appLoad() {
        let app = this;
        setTimeout(function () {
            app.setState({
                ready: true
            });
        }, 2000);
    }

  render() {
    return (
      <div className="App" onLoad={this.appLoad}>
          <Header/>
          <Main/>
          <Footer/>
          <ContactsBlock/>
          <DownloadBlock/>
          <SubscribeBtn/>
          <Preloader state={this.state.ready}/>
      </div>
    );
  }
}

export default App;
