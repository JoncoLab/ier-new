import React, { Component } from 'react';

export class Search extends Component {
    render() {
        return (
            <div className="search-box">
                <label className="SearchIco" for="search">☺</label>
                <input type="search" id="search" placeholder="Пошук"/>
            </div>
        );
    };
}