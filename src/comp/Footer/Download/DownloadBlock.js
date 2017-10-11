import React, { Component } from 'react';
import * as $ from "jquery";

export class DownloadBlock extends Component {
    handleClick() {
        const downloadBlock = $('.DownloadBlock');

        downloadBlock.removeClass('active');
    }

    render() {
        return (
            <div className="DownloadBlock" onClick={this.handleClick}>
                <a href="google.com">Завантажити для IOS ♪</a>
                <a href="google.com">Завантажити для Android ♫</a>
            </div>
        );
    }
}