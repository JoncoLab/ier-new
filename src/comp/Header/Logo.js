import React, { Component } from 'react';

export class Logo extends Component {
    render() {
        return (
            <a href="index.html" className="logo">
                <img src="images/logo.png"  alt="Логотип факультету" />
            </a>
        );
    }
}