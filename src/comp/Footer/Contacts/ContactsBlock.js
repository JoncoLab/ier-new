import React, { Component } from 'react';
import * as $ from "jquery";

export class ContactsBlock extends Component {
    handleClick() {
        const contactsBlock = $('.contacts-block');

        contactsBlock.removeClass('active');
    }
    render() {
        return (
            <section className="contacts-block">
                <table>
                    <caption>Деканат факультету міжнародних відносин:
                        <button id="contacts-close-btn" onClick={this.handleClick}>X</button>
                    </caption>
                    <tr>
                        <th>Телефон:</th>
                        <td>+38 (03122) 3-33-41</td>
                    </tr>
                    <tr>
                        <th>E-mail:</th>
                        <td>official@uzhnu.edu.ua</td>
                    </tr>
                    <tr>
                        <th>Адреса:</th>
                        <td>м.Ужгород, вул.Університетська 14, фуд.510</td>
                    </tr>
                    <tr>
                        <th>Поштовий індекc:</th>
                        <td>88000</td>
                    </tr>
                </table>
                <table>
                    <caption>Ректорат УжНУ:</caption>
                    <tr>
                        <th>Телефон:</th>
                        <td>+38 (03122) 3-33-41</td>
                    </tr>
                    <tr>
                        <th>E-mail:</th>
                        <td>official@uzhnu.edu.ua</td>
                    </tr>
                    <tr>
                        <th>Адреса:</th>
                        <td>Україна, Закарпатська обл., м.Ужгород, пл.Народна 3</td>
                    </tr>
                    <tr>
                        <th>Факс:</th>
                        <td>+38 (03122) 3-42-02</td>
                    </tr>
                    <tr>
                        <th>Поштовий індекс:</th>
                        <td>88000</td>
                    </tr>
                </table>
                <table>
                    <caption>Приймальна комісія УжНУ:</caption>
                    <tr>
                        <th>Телефон:</th>
                        <td>+38 (03122) 64-30-84, 066-571-62-40, 096-123-89-67</td>
                    </tr>
                    <tr>
                        <th>E-mail:</th>
                        <td>admission@uzhnu.edu.ua</td>
                    </tr>
                    <tr>
                        <th>Адреса:</th>
                        <td>Україна, Закрпатська обл., м.Ужгород, вул.Університетська 14, кімн.228</td>
                    </tr>
                    <tr>
                        <th>Поштовий індекс:</th>
                        <td>88000</td>
                    </tr>
                </table>
            </section>
        );
    }
}