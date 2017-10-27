import React, { Component } from 'react';
import {MainPage} from "../pages/MainPage";
import {Schedule} from "../pages/Schedule";

export class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            targetPage: props.targetPage
        };

        this.getContent = this.getContent.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    }

    componentWillReceiveProps(props) {
        const prevProps = this.state;

        if (prevProps.targetPage !== props.targetPage) {
            this.setState({
                targetPage: props.targetPage
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const changed =
            prevState.targetPage !== this.state.targetPage &&
            prevProps.targetPage !== this.state.targetPage;

        if (changed) {
            this.props.onContentLoad();
        }
    }

    getContent() {
        let Content;
        const props = {
            onContentLoad: `${this.props.onContentLoad}`,
            children: `${this.props.children}`
        };
        switch (this.state.targetPage) {
            case "main":
                Content = <MainPage/>;
                break;
            case "ФМЕВ":
                Content = <Schedule/>;
                break;
            default:
                Content = <MainPage/>;
        }

        return React.cloneElement(Content, {...props}, null);
    }

    render() {
        return this.getContent();
    }
}