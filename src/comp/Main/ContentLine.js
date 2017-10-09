import React, { Component } from "react";
import {ContentBlock} from "./ContentBlock";

export class ContentLine extends Component {
    render() {
        return (
            <div className="content-line">
                {this.props.children}
            </div>
        );
    }
}