import React, { Component } from "react";
import {Arrows} from "./Arrows";

export class ContentBlock extends Component {
    render() {
        return (
            <section className={"content-block " + this.props.name}>
                <h2 className="caption">{this.props.caption}</h2>
                <div className="content">
                    {this.props.children}
                </div>
                <Arrows/>
            </section>
        );
    }
}