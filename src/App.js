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
            ready: false,
            template: false,
            page: "main"
        };

        this.appLoad = this.appLoad.bind(this);
        this.switchPage = this.switchPage.bind(this);
        this.templateModeOff = this.templateModeOff.bind(this);
    }

    switchPage(name) {
        const App = this;
        if (App.state.page !== name) {
            const main = $("#main");

            App.setState({
                template: true
            });

            function showPage(page) {
                App.setState({
                    page: page
                });
            }

            function switcher(name) {
                $.ajax({
                    url: "openPage",
                    data: {
                        page: name
                    },
                    method: 'POST',
                    success: function (page) {
                        showPage(page);
                    },
                    error: function () {
                        showPage(name);
                    }
                });
            }

            main.slideUp(500, function () {
                $("#root").animate({
                    height: "100%"
                }, {
                    duration: 250,
                    complete: () => {
                        switcher(name)
                    }
                });
            });
        }
    }

    templateModeOff() {
        const App = this,
            main = $("#main");

        App.setState({
            template: false
        });

        main.slideDown(500, function () {
            $("#root").css({
                height: "auto"
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
          className={this.state.template ? "App template" : "App content"}
          onLoad={this.appLoad}
      >
          <Header
              menuAvailability={!this.state.template}
              passValue={this.switchPage}
          />
          <Main
              targetPage={this.state.page}
              onContentLoad={this.templateModeOff}
          />
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
