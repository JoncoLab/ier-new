import React, { Component } from 'react';
import * as $ from "jquery";

export class DownloadBtn extends Component {
    handleClick() {
        const downloadBlock = $('.DownloadBlock');

        downloadBlock.addClass('active');
    }

    render() {
        return <button id="DownloadBtn" onClick={this.handleClick}>Завантажити Додаток</button>;
    }
}