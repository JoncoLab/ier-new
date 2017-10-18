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

    captions = [];
    dates = [];
    images = [];
    articles = [];

    getContent() {
        const current = this;
        firebase.database(firebase.app("ier-new"))
            .ref("news")
            .endAt(3)
            .once("value")
            .then(function(dataSnapshot) {
                dataSnapshot.forEach(function (newsContentSnapshot) {
                    let caption = newsContentSnapshot.child("caption").val(),
                        date = newsContentSnapshot.child("date").val(),
                        image = newsContentSnapshot.child("image").val(),
                        newsArticle = newsContentSnapshot.val().toString();

                    current.captions.push(caption);
                    current.dates.push(date);
                    current.images.push(image);
                    current.articles.push(newsArticle);
                });
            });
    }

    render() {
        return (
            <section className={"content-block " + this.props.name}>
                <h2 className="caption">{this.props.caption}</h2>
                <div className="content">
                        {
                            this.articles.map((count) =>
                                <article className="news-item count">

                                    <div className="news-image">
                                        {
                                            this.images.map((src) =>
                                                <img alt="img" src={src}/>
                                            )
                                        }
                                    </div>
                                </article>
                            )
                        }
                </div>
                <Arrows/>
            </section>
        );
    }
}