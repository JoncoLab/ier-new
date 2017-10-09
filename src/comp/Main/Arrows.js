import React, { Component } from "react";

export class Arrows extends Component {
    render() {
        return (
            <div className={"arrows " + this.props.type}>
                <span>{this.props.type === 'vertical' ? '♠' : '◘'}</span>
                <span>{this.props.type === 'vertical' ? '•' : '○'}</span>
            </div>
        );
    }
}