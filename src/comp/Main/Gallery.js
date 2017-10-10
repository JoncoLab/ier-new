import React, { Component } from "react";

export class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentItem: 0
        };

        this.switchItem = this.switchItem.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    switchItem(item) {
        this.setState({
            currentItem: item
        });
    }
    next() {
        this.switchItem(this.state.currentItem + 1);
    }
    previous() {
        this.switchItem(this.state.currentItem - 1);
    }
    render() {
        return (
            <div className="gallery">
                <span className="arrow left" onClick={this.previous}>
                    ♠
                </span>
                <div className="container" style={{transform: "translateX(" + this.state.currentItem * -100 + "%)"}}>
                    <img alt="img" src="./img/img-1.jpeg"/>
                    <img alt="img" src="./img/img-2.jpg"/>
                </div>
                <div className="caption">
                    <p>{this.state.currentItem + " is current item"}</p>
                    <div className="counter">
                        <span className="counter-point active">☻</span>
                        <span className="counter-point">☺</span>
                    </div>
                </div>
                <span className="arrow right" onClick={this.next}>
                    •
                </span>
            </div>
        );
    }
}