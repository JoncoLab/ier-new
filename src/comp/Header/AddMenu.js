import React, { Component } from 'react';
import {DropDown} from "./DropDown";

export class AddMenu extends Component {
    items = [
        'DropDown1',
        'DropDown2',
        'DropDown3',
        'DropDown4',
        'DropDown5'
    ];
    render() {
        return (
            <nav className="add-menu">
                <h2>ФМЕВ <span>☻</span></h2>
                <DropDown items={this.items}/>
            </nav>
        );
    }
}