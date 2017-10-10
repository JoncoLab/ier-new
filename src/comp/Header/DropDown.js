import React, { Component } from 'react';

export class DropDown extends Component {
    render() {
        return (
            <ul className="drop-down">
                {
                    this.props.items.map((item) =>
                        <li>{item}<span>•</span></li>
                    )
                }
            </ul>
        );
    }
}