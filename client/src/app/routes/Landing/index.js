import React, { useState, useEffect} from "react";
import "./index.scss";

import errImage from './error.jpg' // relative path to imag

//Import components
import Dropdown from "../../components/Dropdown";
import MatchTable from "../../components/MatchTable";
import ToggleButton from "../../components/ToggleButton";
//Import containers

const Landing = () => {
  const [homeTeam, setHomeTeam] = useState({});
  const [selectAway, setSelectedAway] = useState(true);
  const [selectHome, setSelectHome] = useState(false);
  const [clearable, setClearable] = useState(true);

  // state for data from db
  const [data, setData] = useState([]);
  const [homeTeamsOptions, sethomeTeamsOptions] = useState([]);
  const [awayTeamsOptions, setAwayTeamsOptions] = useState([]);

  const [flagOptions, setFlagOptions] = useState([]);
  // state for flags
  const [flagHome, setFlagHome] = useState(errImage);
  const [flagAway, setFlagAway] = useState(errImage);

  useEffect(() => {
    fetch("/teams")
    .then(response => response.json())
    .then(data => {setAwayTeamsOptions(data.payload); sethomeTeamsOptions(data.payload);})

    fetch("/flags")
    .then(response => response.json())
    .then(data => setFlagOptions(data.payload))

  }, []);

  const homeDropdownChange = async e => {
    setHomeTeam(e);
    
    //logic for flags
    //  console.log("e")
    //  console.log(e)
    if(e !== null){
      const currentFlagHome = flagOptions.filter(function (el) {
        return el["tid"] === e.value 
      })
      if(currentFlagHome[0]["flag"] !== null){
        setFlagHome(currentFlagHome[0]["flag"])
      }
      else{
        setFlagHome(errImage)
      }
    }
    
    else{

      setFlagHome(errImage)
    }
    
    

    if (e !== null){
      setSelectedAway(false);
      try {
        console.log("Here")
        const hid = e.value;
        await fetch(`/teams/away/${hid}`)
        .then(response => response.json())
        .then(data => setAwayTeamsOptions(data.payload))
        const response = await fetch(`/match/${hid}`)
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
      setSelectedAway(true);
      setData(null)
      await fetch("/teams")
      .then(response => response.json())
      .then(data => {setAwayTeamsOptions(data.payload)})
    } 
  }

  const awayDropdownChange = async e => {
    // setAwayTeam(e); 


    if(e !== null){
    const currentFlagAway = flagOptions.filter(function (el) {
      return el["tid"] === e.value 
    })
    
    if(currentFlagAway[0]["flag"] !== null){
      setFlagAway(currentFlagAway[0]["flag"])
    }
    else{
      setFlagAway(errImage)
    }
    }
    else{
      setFlagAway(errImage)
    }


    if (e !== null){
      setClearable(false)
      setSelectHome(true)
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
      setSelectHome(false)
      setData(null)

      const hid = homeTeam.value;

      const response = await fetch(`/match/${hid}`)
      const matches = response.json()
      matches.then(value => {
        setData(value.payload)
      }).catch (err => {
        console.log(err)
      })
    }
  }

  // state for data from db
  const [locations, setLocations] = useState({});
  const [tournaments, setTournaments] = useState({});

  // state for the output filtering
  const [outputToid, setOutputToid] = useState({});
  const [outputLid, setOutputLid] = useState({});

  // state for filter home/away/all on first team
  const [sideFilter, setSideFilter] = useState({});

  // state for filter win/loss/tie/all on first team
  const [winFilter, setWinFilter] = useState({});

  //state for flags
  //const [flags, setFlags] = useState({});




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
    else{
      setOutputLid(null)
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
    else{
      setOutputToid(null)
    }
  }

  const firstTeamSideChange = async e => {
    // console.log('lid')
    // console.log(e['value'])
    
    if (e !== null){
      
      try {
        setSideFilter(e['value']); 
        // console.log(outputLid)
      }
      catch (error) {
        console.log(error);
      }
    }
    else{
      setSideFilter(null)
    }
  }


  const firstTeamWinChange = async e => {
    // console.log('lid')
    // console.log(e['value'])
    
    if (e !== null){
      
      try {
        setWinFilter(e['value']); 
        // console.log(outputLid)
      }
      catch (error) {
        console.log(error);
      }
    }
    else{
      setWinFilter(null)
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

  const sideOptions = [
    {
      "value": 0,
      "label": "Home"
    },
    {
      "value": 1,
      "label": "Away"
    }
  ]

  const winOptions = [
    {
      "value": 0,
      "label": "Win"
    },
    {
      "value": 1,
      "label": "Loss"
    },
    {
      "value": 2,
      "label": "Tie"
    }
  ]

  return (
    <div className="Landing">
      <div className="inner container is-fluid">
        <h1 className="title is-xxxxl has-text-centered">Goal Catcher </h1>
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
          {/* {console.log("flagHome")}
          {console.log(flagHome)}
          {console.log(typeof flagHome)} */}
          <img className="flags" src={flagHome}  alt=""/>
          <Dropdown options={homeTeamsOptions} onChange={homeDropdownChange} placeholderText="Select A Team" isDisabled={selectHome} isClearable={clearable}/>
          VS
          <Dropdown options={awayTeamsOptions} onChange={awayDropdownChange} placeholderText="Select A Team" isDisabled={selectAway} isClearable={true}/>
          <img className="flags" src={flagAway} alt="" />
        </div>
        <div>
        {/* {console.log(locations)} */}
          <ToggleButton firstWin={winOptions} firstWinFilter={firstTeamWinChange} firstSide={sideOptions} firstSideFilter={firstTeamSideChange} locations={locations} locationChange={locationChange} tournaments={tournaments} tournamentChange={tournamentChange} show={show} setShow={setShow}/>
        </div>
        

        <div className="container">
            <h1 className ="matchHistory">Match History</h1>
            <MatchTable data={data} lid={outputLid} toid={outputToid} hid={homeTeam} firstSide={sideFilter} firstWin={winFilter}/>
            {/* {console.log("outputLid: ")} */}
            {/* {console.log(outputLid)} */}
        </div>
      </div>
    </div>
  );
};

export default Landing;