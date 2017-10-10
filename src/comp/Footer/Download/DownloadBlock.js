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
                <a href="#">Завантажити для IOS ♪</a>
                <a href="#">Завантажити для Android ♫</a>
            </div>
        );
    }
}