import React, { Component } from 'react';
import {ContentLine} from "./Main/ContentLine";
import {ContentBlock} from "./Main/ContentBlock";
import {Gallery} from "./Main/Gallery";
import {NewsBlock} from "./Main/News";

export class Main extends Component {
    render() {
        return (
            <main>
                <ContentLine>
                    <Gallery/>
                </ContentLine>
                <ContentLine>
                    <NewsBlock name="news" caption="Новини">
                        <article className="news-item">
                            <div className="news-image">
                                <img alt="img" src="./img/img-3.jpg"/>
                            </div>
                            <h3>Залучення іноземних туристів</h3>
                            <p className="date">26 Вер.</p>
                        </article>
                        <article className="news-item">
                            <div className="news-image">
                                <img alt="img" src="./img/img-2.jpg"/>
                            </div>
                            <h3>Міграційна політика Швейцарії та Європи</h3>
                            <p className="date">26 Вер.</p>
                        </article>
                        <article className="news-item">
                            <div className="news-image">
                                <img alt="img" src="./img/img-4.jpg"/>
                            </div>
                            <h3>Меморандум про співпрацю</h3>
                            <p className="date">26 Вер.</p>
                        </article>
                    </NewsBlock>
                    <ContentBlock name="anouncements" caption="Анонси">
                        <article className="anouncements-item">
                            <p className="date">30 Вер.</p>
                            <p>Анонс</p>
                        </article>
                        <article className="anouncements-item">
                            <p className="date">30 Вер.</p>
                            <p>Анонс</p>
                        </article>
                        <article className="anouncements-item">
                            <p className="date">30 Вер.</p>
                            <p>Анонс</p>
                        </article>
                        <article className="anouncements-item">
                            <p className="date">30 Вер.</p>
                            <p>Анонс</p>
                        </article>
                    </ContentBlock>
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
                                src="https://www.youtube.com/embed/r0bGdA_uQXc?rel=0&amp;controls=0&amp;showinfo=0"
                                title="top-right-video"
                            >

                            </iframe>
                        </div>
                        <div className="video bottom-left">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/r0bGdA_uQXc?rel=0&amp;controls=0&amp;showinfo=0"
                                title="bottom-left-video"
                            >

                            </iframe>
                        </div>
                        <div className="video bottom-right">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/r0bGdA_uQXc?rel=0&amp;controls=0&amp;showinfo=0"
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