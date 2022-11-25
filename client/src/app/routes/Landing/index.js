import React, { useState, useEffect} from "react";
import "./index.scss";

//Import components
import Dropdown from "../../components/Dropdown";
import MatchTable from "../../components/MatchTable";

//Import containers

const Landing = () => {
  const [homeTeam, setHomeTeam] = useState({});
  const [awayTeam, setAwayTeam] = useState({});
  const [selectAway, setSelectedAway] = useState(true);
  const [clearable, setClearable] = useState(true);

  // state for data from db
  const [data, setData] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("/teams")
    .then(response => response.json())
    .then(data => setTeams(data.payload))
  }, []);

  const homeDropdownChange = async e => {
    setHomeTeam(e); 
    if (e !== null){
      setSelectedAway(false);
      try {
        const hid = e.value;
        const aid = awayTeam.value;
  
        if(!aid){
          const response = await fetch(`/match/${hid}`)
          const matches = response.json()
          matches.then(value => {
            setData(value.payload)
          }).catch (err => {
            console.log(err)
          })
        }
        else{
          const response = await fetch(`/match/${hid}/${aid}`)
          const matches = response.json()
          matches.then(value => {
            setData(value.payload)
          }).catch (err => {
            console.log(err)
          })
        }
      } catch (error) {
        console.log(error);
      }
    }
    else{
      setSelectedAway(true);
      setData(null)
    }
    
  }

  const awayDropdownChange = async e => {
    setAwayTeam(e);
    try {
      const hid = homeTeam.value;
      
      if(e == null){
        setClearable(true);
        const response = await fetch(`/match/${hid}`)
        const matches = response.json()
        matches.then(value => {
          setData(value.payload)
        }).catch (err => {
          console.log(err)
        })
      }
      else{
        setClearable(false);
        const aid = e.value;
        const response = await fetch(`/match/${hid}/${aid}`)
        const matches = response.json()
        matches.then(value => {
          setData(value.payload)
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
          <Dropdown options={teams} onChange={homeDropdownChange} isDisabled={false} isClearable={clearable}/>
          VS
          <Dropdown options={teams} onChange={awayDropdownChange} isDisabled={selectAway} isClearable={true}/>
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