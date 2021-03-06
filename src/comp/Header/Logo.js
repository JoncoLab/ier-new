import React, { Component } from 'react';

export class Logo extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.available = props.menuAvailability;
    }
    handleClick(event) {
        const Logo = this;

        event.preventDefault();

        if (Logo.available) Logo.props.passValue("main");
    }
    render() {
        return (
            <a
                href="index.html"
                className="logo"
                onClick={this.handleClick}
            >
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