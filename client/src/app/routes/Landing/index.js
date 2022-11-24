import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./index.scss";

//Import components
import Dropdown from "../../components/Dropdown";

//Import containers

const Landing = () => {
  const [homeTeam, setHomeTeam] = useState({});
  const [awayTeam, setAwayTeam] = useState({});

  const [searchErrorMessage, setSearchErrorMessage] = useState("");

  // state for data from db
  const [data, setData] = useState([]);

 

  const onSearch = async e => {
    e.preventDefault();
    try {
      const hid = homeTeam.value;
      const aid = awayTeam.value;
      setSearchErrorMessage("");

      if(!hid && !aid){
        setSearchErrorMessage("Please Select A Team!");
        return
      }
      else if(!hid || hid === 0){
        const response = await fetch(`/match/${aid}`)
        
        const matches = response.json()
        
        //matches is a promise, so use then

        matches.then(value => {
          // console.log(value.payload)
          setData(value.payload)
          console.log(data)
          console.log(data[0])
        }).catch (err => {
          console.log(err)
        })
        
        
      }
      else if(!aid || aid === 0){

        const response = await fetch(`/match/${hid}`)
        const matches = response.json()
        matches.then(value => {
          // console.log(value.payload)
          setData(value.payload)
          console.log(data)
          console.log(data[0])
        }).catch (err => {
          console.log(err)
        })
      }
      else{
        const response = await fetch(`/match/${hid}/${aid}`)
        const matches = response.json()
        matches.then(value => {
          // console.log(value.payload)
          setData(value.payload)
          console.log(data)
          console.log(data[0])
        }).catch (err => {
          console.log(err)
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

 
  return (
    <div className="Landing">
      <div className="inner container is-fluid">
        <h1 className="title is-xxxxl has-text-centered">Goal Catcher</h1>
        <p className="is-lg subtitle has-text-centered">
          Select Two Teams To Get Started
        </p>
        <div className="dropdowns">
          <Dropdown onChange={setHomeTeam}/>
          VS
          <Dropdown onChange={setAwayTeam}/>
        </div>
        <p className="errorMessage">{searchErrorMessage}</p>
        <div className="buttons">
            <Link to="/test">
              <button className="button is-grey is-hollow is-large" onClick={onSearch}>
                Search
              </button>
            </Link>
        </div>
        <div className="container">
            <h1>Simple Inventory Table</h1>
            <table>
                <thead>
                <tr>
                    <th>mid</th>
                    <th>home_score</th>
                    <th>away_score</th>
                    <th>team_name</th>
                </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.mid}>
                                <td>{item.mid}</td>
                                <td>{item.home_score}</td>
                                <td>{item.away_score}</td>
                                <td>{item.team_name}</td>
                                <td/>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default Landing;