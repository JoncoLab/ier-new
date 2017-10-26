import React, { Component } from 'react';
import ReactDom from "react-dom";
import './App.css';
import { Header } from "./comp/Header";
import { Main } from "./comp/Main";
import { Footer } from "./comp/Footer";
import { ContactsBlock } from "./comp/Footer/Contacts/ContactsBlock";
import { DownloadBlock } from "./comp/Footer/Download/DownloadBlock";
import { SubscribeBtn } from "./comp/SubscribeBtn";
import { Preloader } from "./comp/Preloader";
import * as $ from "jquery";
import {Pages} from "./Pages";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            template: false,
            page: "main"
        };

        this.appLoad = this.appLoad.bind(this);
        this.switchPage = this.switchPage.bind(this);
    }

    switchPage(name) {
        const App = this,
            main = $("#main");


        App.setState({
            template: true
        });

        function switcher() {
            $.ajax({
                url: "openPage",
                data: {
                    page: name
                },
                method: 'POST',
                success: function (data) {
                    alert(data);
                },
                error: function (event) {
                    alert("event");
                },
                complete: function (data) {
                    alert("ajax ok");
                }
            });
        }

        main.slideUp(500, function () {
            $("#root").animate({
                height: "100%"
            }, {
                duration: 250,
                complete: switcher
            });
        });
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
      <div
          className={"App " + (
              this.state.template ?
                  "template" :
                  "content"
          )}
          onLoad={this.appLoad}
      >
          <Header passValue={this.switchPage}/>
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
