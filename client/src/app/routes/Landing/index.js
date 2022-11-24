import React, { useState, useEffect} from "react";
import "./index.scss";

//Import components
import Dropdown from "../../components/Dropdown";
import MatchTable from "../../components/MatchTable";

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
        <p className="is-rem subtitle has-text-centered">
          Select One Team For Individual Match History
        </p>
        <p className="is-rem is-bold subtitle has-text-centered">
          OR
        </p>
        <p className="is-rem subtitle has-text-centered">
          Select Two Teams For VS Match History
        </p>
        <div className="dropdowns">
          <Dropdown onChange={setHomeTeam}/>
          VS
          <Dropdown onChange={setAwayTeam}/>
        </div>
        <p className="errorMessage">{searchErrorMessage}</p>
        <div className="buttons">
              <button className="button is-grey is-hollow is-large" onClick={onSearch}>
                Search
              </button>
        </div>
        <div className="container">
            <h1>Match History</h1>
            <MatchTable data={data}/>
        </div>
      </div>
    </div>
  );
};

export default Landing;