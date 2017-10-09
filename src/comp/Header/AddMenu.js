import React, { Component } from 'react';
import {DropDown} from "./DropDown";

export class AddMenu extends Component {
    render() {
        return (
            <nav className="add-menu">
                <h2>ФМЕВ <span>☻</span></h2>
                <DropDown/>
            </nav>
        );
    }
}