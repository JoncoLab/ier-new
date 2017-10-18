import React, { Component } from "react";
import * as $ from "jquery";
import firebase from "firebase";

export class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentItem: 0
        };

        this.switchItem = this.switchItem.bind(this);
        this.pointSwitcher = this.pointSwitcher.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    captions = [
        "День перекладача",
        "Ще якась новина, я забув, сорі",
        "Міс Факультету Міжнародних Економічних Відносин 2017",
        "Ще якась новина, яку я теж забув",
        "Та новина, де фотка з грошима"
    ];
    switchItem(item) {
        let target = item >= 0 ?
            (item <= 4 ?
                item : 4) :
            0;
        this.setState({
            currentItem: target
        });
        const counters = $('.gallery .caption .counter .counter-point');
        counters.removeClass("active");
        $(counters[target]).addClass("active");
        alert(firebase.storage(firebase.app("ier-new")).ref("gallery/"));
    }
    next() {
        this.switchItem(this.state.currentItem + 1);
    }
    previous() {
        this.switchItem(this.state.currentItem - 1);
    }
    pointSwitcher(item) {
        this.switchItem(item);
    }
    render() {
        return (
            <div className="gallery">
                <span className="arrow left" onClick={this.previous}>
                    ♠
                </span>
                <div className="container" style={{transform: "translateX(" + this.state.currentItem * -100 + "%)"}}>
                    <img alt="img" src="./img/img-1.jpeg"/>
                    <img alt="img" src="./img/img-1.jpeg"/>
                    <img alt="igm" src="./img/hot-new-miss.jpg"/>
                    <img alt="img" src="./img/img-1.jpeg"/>
                    <img alt="img" src="./img/img-1.jpeg"/>
                </div>
                <div className="caption">
                    <p>
                        {
                            this.captions[this.state.currentItem]
                        }
                    </p>
                    <div className="counter">
                        <span onClick={(e) => this.switchItem(0)} className="counter-point active"> </span>
                        <span onClick={(e) => this.switchItem(1)} className="counter-point"> </span>
                        <span onClick={(e) => this.switchItem(2)} className="counter-point"> </span>
                        <span onClick={(e) => this.switchItem(3)} className="counter-point"> </span>
                        <span onClick={(e) => this.switchItem(4)} className="counter-point"> </span>
                    </div>
                </div>
                <span className="arrow right" onClick={this.next}>
                    •
                </span>
            </div>
        );
    }
}