import React, {Component} from "react";

export class Page extends Component {
    render() {
        return (
            <main
                id={"main"}
                className={this.props.className}
            >
                {this.props.children}
            </main>
        );
    }
}