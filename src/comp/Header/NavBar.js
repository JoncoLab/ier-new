import React, { Component } from 'react';
import {DropDown} from "./DropDown";

export class NavBar extends Component {
    render() {
        return (
            <nav>
                <h2>{this.props.name}</h2>
            </nav>
        );
    }
}