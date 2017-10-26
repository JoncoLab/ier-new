import React, { Component } from 'react';
import { Logo } from "./Logo";
import { Search } from "./Search";
import { NavBar } from "./NavBar";
import { SocialButtons } from "./SocialButtons";
import {AddMenu} from "./AddMenu";

export class NavMenu extends Component {
    abItems = [
        'Напрями Підготовки',
        'Програма вступу до магістратури',
        'Програма вступу до аспірантури'
    ];
    studItems = [
        [
            '$',
            'Розклад занять (денна форма)',
            'ФМЕВ',
            'ПЛ'
        ],
        'Розклад занять (заочна форма)',
        'Електронна бібліотека',
        'Методичні вказівки',
        'Графік заліково-екзаменаційної сесії',
        'Графік перескладань'
    ];
    render() {
        return (
            <nav className="nav-menu">
                <Logo/>
                <Search/>
                <div className="main-menu">
                    <NavBar passValue={this.props.passValue} name="Вступнику" items={this.abItems}/>
                    <NavBar passValue={this.props.passValue} name="Студенту" items={this.studItems}/>
                </div>
                <AddMenu passValue={this.props.passValue}/>
                <SocialButtons/>
            </nav>
        );
    }
}