import React, { Component } from 'react';

export class GoogleMaps extends Component {
    render() {
        return  (
            <iframe
                className="GoogleMaps"
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ9QaRKjQYOUcRR8L7SNcV7aI&key=AIzaSyCtwEcRTT0pjjU_ux-F4SvN0vgZvGuCn00"
            >
            </iframe>
        )
    }
}