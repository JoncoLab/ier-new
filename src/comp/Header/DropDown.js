import React, { Component } from "react";
import * as $ from "jquery";

export class DropDown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            available: props.available
        };

        this.getList = this.getList.bind(this);
        this.items = this.getList();
        this.passValue = this.passValue.bind(this);
        this.level = this.props.level;
    }
    passValue(name) {
        this.props.passValue(name);
    }
    getList() {
        let items = this.props.items,
            iteration = 0,
            amount = items.length,
            list = [];
        for (iteration; iteration < amount; iteration++) {
            if (typeof items[iteration] !== "string") {
                items[iteration] = items[iteration].join("*");
            }
            list.push(items[iteration]);
        }
        return list;
    }
    render() {
        return (
            <ul
                style={{
                    opacity: this.state.available ?
                        1 :
                        0
                }}
                className={
                    this.level ?
                        "drop-down level" :
                        "drop-down"
                }
            >
                {
                    this.items.map((item) =>
                        item[0] === '$' ?
                            <ListItem
                                passValue={this.passValue}
                                key={item[1]}
                                items={item.split("*")}
                                leveled={true}
                                alailable={this.state.available}
                            /> :
                            <ListItem
                                passValue={this.passValue}
                                key={item}
                                items={item}
                                leveled={false}
                            />
                    )
                }
            </ul>
        );
    }
}

class ListItem extends Component {
    constructor(props) {
        super(props);

        this.leveled = props.leveled;
        this.getList = this.getList.bind(this);

        const list = this.getList();

        this.name = this.leveled ?
            list[0] :
            props.items;
        this.items = list.slice(1, list.length);
        this.className = this.leveled ?
            "list-item leveled" :
            "list-item";
        this.handleClick = this.handleClick.bind(this);
        this.available = props.available;
    }
    getList() {
        let items = this.props.items,
            amount = items.length,
            iteration = 1,
            list = [];

        for (iteration; iteration < amount; iteration++) {
            list.push(items[iteration]);
        }

        return list;
    }
    handleClick() {
        let name = this.name;
        this.props.passValue(name);
    }
    render() {
        return this.leveled ?
            (
                <li className={this.className}>
                    {this.name}
                    <DropDown
                        level={true}
                        passValue={this.props.passValue}
                        items={this.items}
                        available={this.available}
                    />
                </li>
            ) :
            (
                <li onClick={this.handleClick} className={this.className}>
                    {this.name}
                    <span>•</span>
                </li>
            );
    }
}