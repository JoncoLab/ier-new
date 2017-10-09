import React, { Component } from 'react';
import { Logo } from "./Logo";
import { Search } from "./Search";
import { NavBar } from "./NavBar";
import { SocialButtons } from "./SocialButtons";
import {AddMenu} from "./AddMenu";

export class NavMenu extends Component {
    render() {
        return (
            <nav className="nav-menu">
                <Logo/>
                <Search/>
                <div className="main-menu">
                    <NavBar name="Абітурієнту"/>
                    <NavBar name="Студенту"/>
                </div>
                <AddMenu/>
                <SocialButtons/>
            </nav>
        );
    }
}