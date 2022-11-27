import React from "react";
import "./index.scss";

const MatchTable = (props) => {
    const data = props.data;
    const dataTable = !data ? <tr></tr> : data.map((item) => (
        <tr key={item.mid}>
            <td>{item.home_team}</td>
            <td>{item.away_team}</td>
            <td>{item.home_score} - {item.away_score}</td>
            <td>{item.t_name}</td>
            <td>{item.region}</td>
            <td>{item.city}</td>
            <td>{item.country}</td>
            <td>{item.m_date}</td>
            <td/>
        </tr>
    ))
    return (
        <table>
            <thead>
                <tr>
                    <th>Home Team</th>
                    <th>Away Team</th>
                    <th>Score</th>
                    <th>Tournament</th>
                    <th>Region</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {dataTable}
            </tbody>
        </table>
    )
}

export default MatchTable;