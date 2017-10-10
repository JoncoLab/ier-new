import React, { Component } from "react";

export class ContentLine extends Component {
    render() {
        return (
            <div className="content-line">
                {this.props.children}
            </div>
        );
    }
}