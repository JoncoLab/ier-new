import React, { Component } from 'react';
import { Logo } from "./Logo";
import { Search } from "./Search";
import { NavBar } from "./NavBar";
import { SocialButtons } from "./SocialButtons";
import {AddMenu} from "./AddMenu";

export class NavMenu extends Component {
    studItems = [
        'DropDown1',
        'DropDown2',
        'DropDown3'
    ];

    abItems = [
        'DropDown1',
        'DropDown2',
        'DropDown3',
        'DropDown4'
    ];
    render() {
        return (
            <nav className="nav-menu">
                <Logo/>
                <Search/>
                <div className="main-menu">
                    <NavBar name="Абітурієнту" items={this.abItems}/>
                    <NavBar name="Студенту" items={this.studItems}/>
                </div>
                <AddMenu/>
                <SocialButtons/>
            </nav>
        );
    }
}