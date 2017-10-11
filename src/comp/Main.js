import React, { Component } from 'react';
import {ContentLine} from "./Main/ContentLine";
import {ContentBlock} from "./Main/ContentBlock";
import {Gallery} from "./Main/Gallery";

export class Main extends Component {
    render() {
        return (
            <main>
                <ContentLine>
                    <Gallery/>
                </ContentLine>
                <ContentLine>
                    <ContentBlock name="news" caption="Новини">
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
                    </ContentBlock>
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
                <ContentLine>
                    <ContentBlock name="lectures" caption="Публічні лекції">
                        <article className="lectures-item">
                            <div className="lectures-image">
                                <img alt="img" src="./img/img-3.jpg"/>
                            </div>
                            <h3 className="heading">HEADING</h3>
                        </article>
                    </ContentBlock>
                    <ContentBlock name="art" caption="Студентська творчість">
                        <article className="art-item">
                            <div className="art-image">
                                <img alt="img" src="./img/img-3.jpg"/>
                            </div>
                            <h3 className="heading">HEADING</h3>
                        </article>
                    </ContentBlock>
                    <ContentBlock name="feedback" caption="Відгуки">
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