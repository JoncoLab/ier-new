import React, { Component } from 'react';
import {DropDown} from "./DropDown";

export class NavBar extends Component {
    render() {
        return (
            <nav className="menu-item">
                <h2>{this.props.name}</h2>
                <DropDown
                    passValue={this.props.passValue}
                    items={this.props.items}
                    available={this.props.menuAvailability}
                />
            </nav>
        );
    }
}