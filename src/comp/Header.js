import React, { Component } from "react";
import { NavMenu } from "./Header/NavMenu";

export class Header extends Component {
    render() {
        return (
            <header>
                <NavMenu passValue={this.props.passValue}/>
            </header>
        );
    }
}