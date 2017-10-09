import React, { Component } from 'react';
import {ContentLine} from "./Main/ContentLine";
import {ContentBlock} from "./Main/ContentBlock";

export class Main extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <main>
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
            </main>
        );
    }
}