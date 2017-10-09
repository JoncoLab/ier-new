import React, { Component } from "react";

export class Gallery extends Component {
    render() {
        return (
            <div className="gallery">
                <span className="arrow left">
                    ♠
                </span>
                <div className="container">
                    <img src="./img/img-1.jpeg"/>
                    <img src="./img/img-2.jpg"/>
                </div>
                <p className="caption">
                    CAPTION
                </p>
                <div className="counter">
                    <span className="counter-point active">☻</span>
                    <span className="counter-point">☺</span>
                </div>
                <span className="arrow right">
                    •
                </span>
            </div>
        );
    }
}