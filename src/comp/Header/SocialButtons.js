import React, { Component } from 'react';

export class SocialButtons extends Component {
    render() {
        return (
            <div className="social-box">
                <a
                    href="https://www.facebook.com/Факультет-Міжнародних-Економічних-Відносин-УЖНУ-596691557077541/?fref=ts"
                    className="social-btn fb">♣</a>
                <a href="google.com" className="social-btn yt">y</a>
                <a href="google.com" className="social-btn gp">♥</a>
            </div>
        );
    }
}