import React, { Component } from 'react';

export class NavBar extends Component {
    render() {
        return (
            <nav className="NavBar">
                <h2>Абітурієнту</h2>
                <h2>Студенту</h2>
                <h2>ФМЕВ <span>☻</span></h2>
            </nav>
        );
    }
}