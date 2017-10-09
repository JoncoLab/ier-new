import React, { Component } from 'react';
import { Logo } from "./Logo";
import { Search } from "./Search";
import { NavBar } from "./NavBar";
import { SocialButtons } from "./SocialButtons";

export class NavMenu extends Component {
    render() {
        return (
            <nav className="NavMenu">
                <Logo/>
                <Search/>
                <NavBar/>
                <SocialButtons/>
            </nav>
        );
    }
}