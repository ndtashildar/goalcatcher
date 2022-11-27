import React, { useState, useEffect} from "react";
import "./index.scss";

//Import components
import Dropdown from "../../components/Dropdown";
import MatchTable from "../../components/MatchTable";
import ToggleButton from "../../components/ToggleButton";
//Import containers

const Landing = () => {
  const [homeTeam, setHomeTeam] = useState({});
  const [awayTeam, setAwayTeam] = useState({});
  const [selectAway, setSelectedAway] = useState(true);
  const [clearable, setClearable] = useState(true);

  // state for data from db
  const [data, setData] = useState([]);
  const [homeTeamsOptions, sethomeTeamsOptions] = useState([]);
  const [awayTeamsOptions, setAwayTeamsOptions] = useState([]);

  useEffect(() => {
    fetch("/teams")
    .then(response => response.json())
    .then(data => {setAwayTeamsOptions(data.payload); sethomeTeamsOptions(data.payload);})
  }, []);

  const homeDropdownChange = async e => {
    setHomeTeam(e); 
    if (e !== null){
      setSelectedAway(false);
      try {
        const hid = e.value;
        await fetch(`/teams/away/${hid}`)
        .then(response => response.json())
        .then(data => setAwayTeamsOptions(data.payload))

        if(awayTeam.value === undefined){
          console.log("One", homeTeam, awayTeam)
          const response = await fetch(`/match/${hid}`)
          const matches = response.json()
          matches.then(value => {
            setData(value.payload)
          }).catch (err => {
            console.log(err)
          })
        }
        else{
          console.log("Two", homeTeam, awayTeam.value)
          const aid = awayTeam.value;
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
      await fetch("/teams")
      .then(response => response.json())
      .then(data => {setAwayTeamsOptions(data.payload)})
    } 
  }

  const awayDropdownChange = async e => {
    setAwayTeam(e); 
    if (e !== null){
      setClearable(false)
      try {

        const aid = e.value;
        const hid = homeTeam.value;

        const response = await fetch(`/match/${hid}/${aid}`)
        const matches = response.json()
        matches.then(value => {
          setData(value.payload)
        }).catch (err => {
          console.log(err)
        })

      } catch (error) {
        console.log(error);
      }
    }
    else{
      setClearable(true)
      setData(null)
    }
    
  }

  // state for data from db
  const [locations, setLocations] = useState({});
  const [tournaments, setTournaments] = useState({});

  // state for the output filtering
  const [outputToid, setOutputToid] = useState({});
  const [outputLid, setOutputLid] = useState({});


  const locationChange = async e => {
    // console.log('lid')
    // console.log(e['value'])
    
    if (e !== null){
      
      try {
        setOutputLid(e['value']); 
        // console.log(outputLid)
      }
      catch (error) {
        console.log(error);
      }
    }
  }
        
  const tournamentChange = async e => {
    // console.log('lid')
    // console.log(e['value'])
    
    if (e !== null){
      
      try {
        setOutputToid(e['value']); 
        // console.log(outputLid)
      }
      catch (error) {
        console.log(error);
      }
    }
  }


  useEffect(() => {
    
    fetch("/locations")
    .then(response => response.json())
    .then(data => setLocations(data.payload))

    fetch("/tournaments")
    .then(response => response.json())
    .then(data => setTournaments(data.payload))
    
    // console.log(tournaments[0]['value'])
    
  }, []);

  const [show,setShow]=useState(false)

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
          <Dropdown options={homeTeamsOptions} onChange={homeDropdownChange} placeholderText="Select A Team" isDisabled={false} isClearable={clearable}/>
          VS
          <Dropdown options={awayTeamsOptions} onChange={awayDropdownChange} placeholderText="Select A Team" isDisabled={selectAway} isClearable={true}/>
        </div>
        <div>
          <ToggleButton locations={locations} locationChange={locationChange} tournaments={tournaments} tournamentChange={tournamentChange} show={show} setShow={setShow}/>
        </div>
        

        <div className="container">
            <h1>Match History</h1>
            <MatchTable data={data} lid={outputLid} toid={outputToid}/>
            {console.log("outputLid: ")}
            {console.log(outputLid)}
        </div>
      </div>
    </div>
  );
};

export default Landing;