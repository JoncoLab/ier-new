import React, { Component } from "react";
import * as $ from "jquery";

export class DropDown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            available: true
        };

        this.getList = this.getList.bind(this);
        this.items = this.getList();
        this.passValue = this.passValue.bind(this);
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
    static hideAll() {
        const dropDowns = $("ul.drop-down");
        dropDowns.css({
            transform: "scale(0)"
        });
    }
    render() {
        return (
            <ul
                className={
                    this.props.level ?
                        "drop-down level" :
                        "drop-down"
                }
                onClick={DropDown.hideAll}
            >
                {
                    this.items.map((item) =>
                        item[0] === '$' ?
                            <ListItem
                                passValue={this.passValue}
                                key={item[1]}
                                items={item.split("*")}
                                leveled={true}
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

        this.leveled = this.props.leveled;
        this.getList = this.getList.bind(this);

        const list = this.getList();

        this.name = this.leveled ?
            list[0] :
            this.props.items;
        this.items = list.slice(1, list.length);
        this.className = this.leveled ?
            "list-item leveled" :
            "list-item";
        this.handleClick = this.handleClick.bind(this);
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