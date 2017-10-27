import React, { Component } from "react";
import { NavMenu } from "./Header/NavMenu";

export class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            height: window.innerWidth > 480 ?
                "auto" :
                (window.innerHeight + "px")
        };

        this.handleHeight = this.handleHeight.bind(this);
        this.menuAvailability = props.menuAvailability;
        window.onresize = () => this.handleHeight({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }
    handleHeight(params) {
        let height;
        if (params.width <= 480) {
            height = params.height + "px";
        } else {
            height = "auto"
        }
        this.setState({
            height: height
        });
    }
    render() {
        return (
            <header
                style={{
                    height: this.state.height
                }}
            >
                <NavMenu
                    passValue={this.props.passValue}
                    menuAvailability={this.menuAvailability}
                />
            </header>
        );

    }
}