import React, {Component} from "react";

export class Schedule extends Component {
    render() {
        return (
            <main id="schedule-page">
                <table>
                    <tr rowSpan="3">
                        <th rowSpan="5">Дні тижня</th>
                        <th rowSpan="5">Пара</th>
                        <th rowSpan="5">Варіант</th>
                        <th rowSpan="5">Академ. години</th>
                    </tr>
                    <tr>
                        <th colSpan="3">1</th>
                        <th colSpan="3">1</th>
                    </tr>
                    <tr>
                        <th colSpan="3">1 семестр</th>
                        <th colSpan="3">1 семестр</th>
                    </tr>
                    <tr>
                        <th colSpan="3">1 група</th>
                        <th colSpan="3">2 група</th>
                    </tr>
                    <tr>
                        <th>Дисципіна</th>
                        <th>Викладач</th>
                        <th>Ауд.</th>
                        <th>Дисципіна</th>
                        <th>Викладач</th>
                        <th>Ауд.</th>
                    </tr>
                    <tr>
                        <td rowSpan={5}>Day</td>
                        <td>Para</td>
                        <td>Var</td>
                        <td>Hour</td>
                        <td>Name</td>
                        <td>Professor</td>
                        <td>Hall</td>
                        <td>Name</td>
                        <td>Professor </td>
                        <td>Hall</td>
                    </tr>
                    <tr>
                        <td>Para</td>
                        <td>Var</td>
                        <td>Hour</td>
                        <td>Name</td>
                        <td>Professor</td>
                        <td>Hall</td>
                        <td>Name</td>
                        <td>Professor </td>
                        <td>Hall</td>
                    </tr>
                    <tr>
                        <td>Para</td>
                        <td>Var</td>
                        <td>Hour</td>
                        <td>Name</td>
                        <td>Professor</td>
                        <td>Hall</td>
                        <td>Name</td>
                        <td>Professor </td>
                        <td>Hall</td>
                    </tr>
                    <tr>
                        <td>Para</td>
                        <td>Var</td>
                        <td>Hour</td>
                        <td>Name</td>
                        <td>Professor</td>
                        <td>Hall</td>
                        <td>Name</td>
                        <td>Professor </td>
                        <td>Hall</td>
                    </tr>
                    <tr>
                        <td>Para</td>
                        <td>Var</td>
                        <td>Hour</td>
                        <td>Name</td>
                        <td>Professor</td>
                        <td>Hall</td>
                        <td>Name</td>
                        <td>Professor </td>
                        <td>Hall</td>
                    </tr>
                </table>
            </main>
        );
    }
}