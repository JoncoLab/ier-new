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
    captions = [];

    getContent() {
        const current = this;
        firebase.database(firebase.app("ier-new"))
            .ref("news")
            .once("value")
            .then(function(dataSnapshot) {
                dataSnapshot.forEach(function (newsContentSnapshot) {
                    let caption = newsContentSnapshot.child("caption").val(),
                        date = newsContentSnapshot.child("date").val(),
                        image = newsContentSnapshot.child("image").val(),
                        article = newsContentSnapshot.key;
                    current.articles.push(article);
                    current.captions.push(caption);
                });
            });
    }

    render() {
        return (
            <section className={"content-block " + this.props.name}>
                <h2 className="caption">{this.props.caption}</h2>
                <div className="content">
                        {
                            this.articles.map((articleProps) =>
                                <article className="news-item">
                                    {

                                    }
                                </article>
                            )
                        }
                </div>
                <Arrows/>
            </section>
        );
    }
}