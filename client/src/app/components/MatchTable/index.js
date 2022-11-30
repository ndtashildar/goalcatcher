import React from "react";
import "./index.scss";

const MatchTable = (props) => {
    const dataFull = props.data;
    const outputLid = props.lid;
    const outputToid = props.toid;
    const homeId = props.hid;
    const sideFilter = props.firstSide;
    const winFilter = props.firstWin;
    // console.log("props")
    // console.log(outputLid)
    // console.log(Object.keys(outputLid).length)
    // console.log(outputToid)
    
    // console.log("dataFull")
    // console.log(dataFull)

    // console.log("winFilter")
    // console.log(winFilter === null)

    var data = null;
    if(dataFull !== null){
        data = dataFull.filter(function (el) {
            // if(outputLid !== null && outputToid !== null){
            //     return el.toid == outputToid && el.lid == outputLid ;
            // }
            // else if(outputLid !== null){
            //     return el.lid == outputLid;
            // }
            // else if(outputToid !== null){
            //     return el.toid == outputToid;
            // }
            // else{
            //     return true
            // }
            //empty check
            if(typeof outputLid === 'number' && typeof outputToid === 'number'){
                // console.log("entered")
                return el.lid == outputLid && el.toid == outputToid
            }
            else if(typeof outputLid === 'number'){
                return el.lid == outputLid
            }
            else if(typeof outputToid === 'number'){
                return el.toid == outputToid
            }
            else{
                return true;
            }
          });
        data = data.filter(function (el) {
            if (sideFilter === 0){
                return el.home_team === homeId["label"]
            }
            else if (sideFilter === 1){
                return el.away_team === homeId["label"]
            }
            else{
                return true;
            }
        })
        // console.log("hid check")
        // console.log(homeId)
        // console.log("sideFilter")
        // console.log(sideFilter)

        data = data.filter(function (el) {
            if (winFilter === 0){
                return ((el.home_team === homeId["label"]) && (el.home_score > el.away_score)) || ((el.away_team === homeId["label"]) && (el.home_score < el.away_score))
            }
            else if (winFilter === 1){
                return ((el.home_team === homeId["label"]) && (el.home_score < el.away_score)) || ((el.away_team === homeId["label"]) && (el.home_score > el.away_score))
            }
            else if(winFilter === 2){
                return ((el.home_team === homeId["label"]) && (el.home_score === el.away_score)) || ((el.away_team === homeId["label"]) && (el.home_score === el.away_score))
            }
            else {
                return true;
            }
        })
    }
    
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