import React, { Component } from 'react';
import {DropDown} from "./DropDown";

export class NavBar extends Component {
    items = this.props.items;
    render() {
        return (
            <nav className="menu-item">
                <h2>{this.props.name}</h2>
                <DropDown items={this.items}/>
            </nav>
        );
    }
}