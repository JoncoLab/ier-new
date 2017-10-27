import React, { Component } from 'react';
import { Logo } from "./Logo";
import { Search } from "./Search";
import { NavBar } from "./NavBar";
import { SocialButtons } from "./SocialButtons";
import {AddMenu} from "./AddMenu";

export class NavMenu extends Component {
    constructor(props) {
        super(props);

        this.commonProps = {
            passValue: props.passValue,
            menuAvailability: props.menuAvailability
        };

        this.abItems = [
            'Напрями Підготовки',
            'Програма вступу до магістратури',
            'Програма вступу до аспірантури'
        ];
        this.studItems = [
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
        this.addItems = [
            'Деканат',
            'Кафедри',
            'Наукова діяльність',
            'Міжнародна співпраця',
            'Подвійні дипломи'
        ];
    }
    render() {
        return (
            <nav className="nav-menu">
                <Logo {...this.commonProps}/>
                <Search/>
                <div className="main-menu">
                    <NavBar
                        {...this.commonProps}
                        name="Вступнику"
                        items={this.abItems}/>
                    <NavBar
                        {...this.commonProps}
                        name="Студенту"
                        items={this.studItems}/>
                </div>
                <AddMenu
                    {...this.commonProps}
                    items={this.addItems}
                    name={"ФМЕВ"}
                />
                <SocialButtons/>
            </nav>
        );
    }
}