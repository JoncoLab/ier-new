import React, { Component } from 'react';

export class Logo extends Component {
    render() {
        return (
            <a href="index.html" className="logo">
                <span
                    className={"logo-img"}
                    style={{
                        fontFamily: "Logo, Helvetica, sans-serif"
                    }}
                    title="Логотип факультету"
                >
                    L
                </span>
            </a>
        );
    }
}