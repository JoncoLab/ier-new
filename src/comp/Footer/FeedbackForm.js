import React, { Component } from 'react';

export class FeedbackForm extends Component {
    render() {
        return (
            <form id="FeedbackForm" method="post">
                <h2 className="FeedbackCaption">Поставити питання</h2>
                <div className="feedback-content">
                    <input type="text" name="name" id="name" placeholder="Ім'я" required/>
                    <input type="email" name="email" id="email" placeholder="E-mail" required/>
                    <input type="text" name="subject" id="subject" placeholder="Тема повідомлення" required/>
                    <textarea name="message" id="message" placeholder="Повідомлення" required></textarea>
                    <input type="submit" id="submit" value="Надіслати" required/>
                </div>
            </form>
        );
    }
}