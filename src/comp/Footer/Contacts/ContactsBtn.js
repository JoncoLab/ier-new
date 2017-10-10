import React, { Component } from 'react';
import * as $ from "jquery";

export class ContactsBtn extends Component {
    handleClick() {
        const contactsBlock = $('.contacts-block');

        contactsBlock.addClass('active');
    }
    render() {
        return <button id="ContactsBtn" onClick={this.handleClick}>Наші Контакти</button>;
    }
}