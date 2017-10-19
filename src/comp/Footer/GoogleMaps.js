import React, { Component } from 'react';

export class GoogleMaps extends Component {
    render() {
        return  (
            <iframe
                title="Мапа до Ужгородського Національного Університету"
                className="GoogleMaps"
                frameBorder="0"
                style={{border:0}}
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJU_VFpzYYOUcRtgQeHft-WJs&key=AIzaSyAaV8QnXNbqA8pcXtOhEXdfWFFgjcaodE0"
            >
            </iframe>
        )
    }
}