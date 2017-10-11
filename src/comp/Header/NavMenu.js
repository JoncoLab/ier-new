import React, { Component } from 'react';
import { Logo } from "./Logo";
import { Search } from "./Search";
import { NavBar } from "./NavBar";
import { SocialButtons } from "./SocialButtons";
import {AddMenu} from "./AddMenu";

export class NavMenu extends Component {
    studItems = [
        'Напрями Підготовки',
        'Програма вступу до магістратури',
        'Програма вступу до аспірантури'
    ];

    abItems = [
        'Розклад занять (денна форма)',
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
                    <NavBar name="Вступнику" items={this.abItems}/>
                    <NavBar name="Студенту" items={this.studItems}/>
                </div>
                <AddMenu/>
                <SocialButtons/>
            </nav>
        );
    }
}