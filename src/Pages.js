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
        switch (page) {
            case "main":
                return <Main/>;
                break;
            case "ФМЕВ":
                return <Schedule/>;
                break;
            default:
                return <Main/>;
            }
    }
    render() {
        return ReactDOM.createPortal(
            this.state.page,
            ReactDOM.findDOMNode(document.getElementById("root").querySelector("#main"))
        );
    }
}