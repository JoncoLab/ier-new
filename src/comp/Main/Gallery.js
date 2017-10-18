import React, { Component } from "react";
import * as $ from "jquery";
import * as firebase from "firebase";

export class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentItem: 0
        };

        this.getCaptions = this.getCaptions.bind(this);
        this.switchItem = this.switchItem.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.getCaptions();
    }
    captions = [];
    images = [];
    spans = [];
    getCaptions() {
        const gallery = this;
        firebase.database(firebase.app("ier-new"))
            .ref("hot-news")
            .once("value")
            .then(function (dataSnapshot) {
                dataSnapshot.forEach(function (newsSnapshot) {
                    let caption = newsSnapshot.child("caption").val(),
                        image = newsSnapshot.child("image").val(),
                        span = newsSnapshot.key.substr(newsSnapshot.key.length - 1);
                    gallery.captions.push(caption);
                    gallery.images.push(image);
                    gallery.spans.push(span);
                });
                gallery.setState({
                    currentItem: gallery.state.currentItem
                });
            });
    }
    switchItem(item) {
        let target = item >= 0 ?
            (item <= 3 ?
                item : 3) :
            0;
        this.setState({
            currentItem: target
        });
        const counters = $('.gallery .caption .counter .counter-point');
        counters.removeClass("active");
        $(counters[target]).addClass("active");
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
                    {
                        this.images.map((src) =>
                            <img src={src}/>
                        )
                    }
                </div>
                <div className="caption">
                    <p>
                        {
                            this.captions[this.state.currentItem]
                        }
                    </p>
                    <div className="counter">
                        {
                            this.spans.map((i) =>
                                <span onClick={(e) => this.switchItem(i - 1)} className={"counter-point" + (i === 1 ? " active" : "")}> </span>
                            )
                        }
                    </div>
                </div>
                <span className="arrow right" onClick={this.next}>
                    •
                </span>
            </div>
        );
    }
}