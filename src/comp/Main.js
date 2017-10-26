import React, { Component } from 'react';
import {ContentLine} from "./Main/ContentLine";
import {ContentBlock} from "./Main/ContentBlock";
import {Gallery} from "./Main/Gallery";
import {NewsBlock} from "./Main/News";
import {AnnouncementsBlock} from "./Main/Announcemets";

export class Main extends Component {
    render() {
        return (
            <main id={"main"}>
                <ContentLine className="large">
                    <Gallery/>
                </ContentLine>
                <ContentLine>
                    <NewsBlock name="news" caption="Новини"/>
                    <AnnouncementsBlock name="announcements" caption="Анонси"/>
                </ContentLine>
                <ContentLine className="full-width">
                    <ContentBlock name="why" caption="Чому ФМЕВ?">
                        <div className="video top-left">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/r0bGdA_uQXc?rel=0&amp;controls=0&amp;showinfo=0"
                                title="top-left-video"
                            >

                            </iframe>
                        </div>
                        <div className="video top-right">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/2UuUrdReHNk?rel=0&amp;controls=0&amp;showinfo=0"
                                title="top-right-video"
                            >

                            </iframe>
                        </div>
                        <div className="video bottom-left">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/bcXkMSUfAVQ?rel=0&amp;controls=0&amp;showinfo=0"
                                title="bottom-left-video"
                            >

                            </iframe>
                        </div>
                        <div className="video bottom-right">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F596691557077541%2Fvideos%2F707763685970327%2F&show_text=0"
                                title="bottom-right-video"
                            >

                            </iframe>
                        </div>
                    </ContentBlock>
                </ContentLine>
                <ContentLine>
                    <ContentBlock name="lectures" caption="Студентське життя">
                        <article className="lectures-item">
                            <div className="lectures-image">
                                <img alt="img" src="./img/img-3.jpg"/>
                            </div>
                            <h3 className="heading">HEADING</h3>
                        </article>
                    </ContentBlock>
                    <ContentBlock name="feedback" caption="Історії успіху">
                        <article className="feedback-item">
                            <div className="feedback-image">
                                <img alt="img" src="./img/img-3.jpg"/>
                            </div>
                            <h3 className="heading">HEADING</h3>
                        </article>
                    </ContentBlock>
                </ContentLine>
            </main>
        );
    }
}