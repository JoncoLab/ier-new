import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Main} from "./comp/Main";
import {Schedule} from "./pages/Schedule";

export class Pages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: this.target
        };

        this.target = Pages.getPage(this.props.page);
    }
    static getPage(page) {
        let target;
        switch (page) {
            case "main":
                target = <Main/>;
                break;
            case "ФМЕВ":
                target = <Schedule/>;
                break;
            default:
                target = <Main/>;
        }
        return target;
    }
    render() {
        return ReactDOM.createPortal(
            this.state.page,
            document.getElementById("main")
        );
    }
}