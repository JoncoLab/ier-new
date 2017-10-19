import React, { Component } from "react";
import {Arrows} from "./Arrows";
import * as $ from "jquery";
import * as firebase from "firebase";

export class NewsBlock extends Component {
    constructor(props) {
        super(props);

        this.getContent = this.getContent.bind(this);
        this.getContent();
    }

    articles = [];

    getContent() {
        const current = this;
        firebase.database(firebase.app("ier-new"))
            .ref("news")
            .limitToFirst(3)
            .once("value")
            .then(function(dataSnapshot) {
                dataSnapshot.forEach(function (newsContentSnapshot) {
                    let caption = newsContentSnapshot.child("caption").val(),
                        date = newsContentSnapshot.child("date").val(),
                        image = newsContentSnapshot.child("image").val(),
                        article = {
                            caption: caption,
                            date: date,
                            image: image
                        };
                    current.articles.push(article);
                });
            });
    }

    render() {
        return (
            <section className={"content-block " + this.props.name}>
                <h2 className="caption">{this.props.caption}</h2>
                <div className="content">
                    {
                        this.articles.map((item) =>
                            <article className="news-item">
                                <div className="news-image">
                                    <img src={item.image} alt="Фото новини"/>
                                </div>
                                <h3>{item.caption}</h3>
                                <p className="date">{item.date}</p>
                            </article>
                        )
                    }
                </div>
                <Arrows/>
            </section>
        );
    }
}