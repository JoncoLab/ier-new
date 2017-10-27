import React, {Component} from "react";

export class Page extends Component {
    render() {
        return (
            <main
                id={"main"}
                className={this.props.className}
                style={{
                    flexGrow: 1
                }}
            >
                {this.props.children}
            </main>
        );
    }
}