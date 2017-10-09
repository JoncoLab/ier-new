import React, { Component } from "react";

export class ContentBlock extends Component {
    render() {
        return (
            <section className={"content-block " + this.props.name}>
                <h2 className="caption">{this.props.caption}</h2>
                <div className="content">
                    {this.props.children}
                </div>
            </section>
        );
    }
}