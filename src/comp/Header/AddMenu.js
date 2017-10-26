import React, { Component } from 'react';
import {DropDown} from "./DropDown";

export class AddMenu extends Component {
    items = [
        'Деканат',
        'Кафедри',
        'Наукова діяльність',
        'Міжнародна співпраця',
        'Подвійні дипломи'
    ];
    render() {
        return (
            <nav className="add-menu">
                <h2>ФМЕВ <span>☻</span></h2>
                <DropDown passValue={this.props.passValue} items={this.items}/>
            </nav>
        );
    }
}