import React, { Component } from 'react';
import * as $ from "jquery";

export class Search extends Component {
    handleClick () {
        const search = $('#search');

        search.toggleClass('active');
    }

    render() {
        return (
            <div className="search-box">
                <label className="SearchIco" for="search" onClick={this.handleClick}>☺</label>
                <input type="search" id="search" placeholder="Пошук"/>
            </div>
        );
    };
}