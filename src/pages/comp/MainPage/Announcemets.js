import React, { Component } from 'react';
import {Arrows} from "../Arrows";
import * as firebase from "firebase";

export class AnnouncementsBlock extends Component {
    constructor(props) {
        super(props);

        this.getAnnoun= this.getAnnoun.bind(this);
        this.getAnnoun();
    }

    articles = [];

    getAnnoun() {
        const current = this;
        firebase.database(firebase.app("ier-new"))
            .ref("announcements")
            .limitToFirst(4)
            .once("value")
            .then(function(dataSnapshot) {
                dataSnapshot.forEach(function (announcementsSnapshot) {
                    let caption = announcementsSnapshot.child("caption").val(),
                        date = announcementsSnapshot.child("date").val(),
                        article = {
                            caption: caption,
                            date: date
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
                        this.articles.map((content) =>
                            <article className="announcements-item">
                                <p className="date">{content.date}</p>
                                <p>{content.caption}</p>
                            </article>
                        )
                    }
                </div>
                <Arrows/>
            </section>
        );
    }
}