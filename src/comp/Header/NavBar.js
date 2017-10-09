import React, { Component } from 'react';

export class NavBar extends Component {
    render() {
        return (
            <nav className="nav-bar">
                <h2>{this.props.name}</h2>
            </nav>
        );
    }
}