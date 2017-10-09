import React, { Component } from "react";
import { FeedbackForm } from "./Footer/FeedbackForm";
import { ContactsBtn } from "./Footer/Contacts/ContactsBtn";
import {DownloadBtn } from "./Footer/Download/DownloadBtn";
import { GoogleMaps } from "./Footer/GoogleMaps";
import { Copyright } from "./Footer/Copyright";

export class Footer extends Component {
    render() {
        return (
            <footer>
                <FeedbackForm/>
                <ContactsBtn/>
                <DownloadBtn/>
                <GoogleMaps/>
                <Copyright/>
            </footer>
        );
    }
}