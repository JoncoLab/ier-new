import React, { Component } from 'react';
import {ContentLine} from "./Main/ContentLine";
import {ContentBlock} from "./Main/ContentBlock";
import {Arrows} from "./Main/Arrows";
import {Gallery} from "./Main/Gallery";

export class Main extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <main>
                <ContentLine>
                    <Gallery/>
                </ContentLine>
                <ContentLine>
                    <ContentBlock name="news" caption="Новини">
                        <article className="lol">
                            lol article tipa
                        </article>
                        <article className="lol-2">
                            lol article-2 tipa
                        </article>
                        <article className="lol-3">
                            lol article-3 tipa
                        </article>
                    </ContentBlock>
                    <ContentBlock name="anouncements" caption="Анонси">
                        <article className="lol">
                            lol article tipa
                        </article>
                        <article className="lol-2">
                            lol article-2 tipa
                        </article>
                        <article className="lol-3">
                            lol article-3 tipa
                        </article>
                        <article className="lol-4">
                            lol article-4 tipa
                        </article>
                    </ContentBlock>
                </ContentLine>
                <ContentLine>
                    <ContentBlock name="lections" caption="Публічні лекції">
                        <Arrows type="vertical"/>
                    </ContentBlock>
                    <ContentBlock name="art" caption="Студентська творчість">
                        <Arrows type="horizontal"/>
                    </ContentBlock>
                    <ContentBlock name="feedback" caption="Відгуки">
                        <Arrows type="vertical"/>
                    </ContentBlock>
                </ContentLine>
            </main>
        );
    }
}