import React, { Component } from 'react';
import {DropDown} from "./DropDown";

export class AddMenu extends Component {
    constructor(props) {
        super(props);

        this.items = props.items;
        this.name = props.name;
    }
    render() {
        return (
            <nav className="add-menu">
                <h2>{this.name + " "}<span>☻</span></h2>
                <DropDown
                    passValue={this.props.passValue}
                    items={this.items}
                    available={this.props.menuAvailability}
                />
            </nav>
        );
    }
}