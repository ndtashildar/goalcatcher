import React, { useState, useEffect} from "react";
import Dropdown from "../Dropdown";


const ToggleButton= ({firstWin, firstWinFilter, firstSide, firstSideFilter, locations, locationChange, tournaments, tournamentChange, show, setShow}) => {

  // // state for data from db
  // const [locations, setLocations] = useState({});
  // const [tournaments, setTournaments] = useState({});

  // // state for the output filtering
  // const [outputToid, setOutputToid] = useState("");
  // const [outputLid, setOutputLid] = useState(0);


  // const locationChange = async e => {
  //   // console.log('lid')
  //   // console.log(e['value'])
    
  //   if (e !== null){
      
  //     try {
  //       setOutputLid(e['value']); 
  //       // console.log(outputLid)
  //     }
  //     catch (error) {
  //       console.log(error);
  //     }
  //   }
  // }
        
  // const tournamentChange = async e => {
  //   // console.log('lid')
  //   // console.log(e['value'])
    
  //   if (e !== null){
      
  //     try {
  //       setOutputToid(e['value']); 
  //       // console.log(outputLid)
  //     }
  //     catch (error) {
  //       console.log(error);
  //     }
  //   }
  // }


  // useEffect(() => {
    
  //   fetch("/locations")
  //   .then(response => response.json())
  //   .then(data => setLocations(data.payload))

  //   fetch("/tournaments")
  //   .then(response => response.json())
  //   .then(data => setTournaments(data.payload))
    
  //   // console.log(tournaments[0]['value'])
    
  // }, []);

  // const [show,setShow]=useState(false)



  return (
    <div>
     {
      show?<div className="dropdowns">
        <Dropdown options={locations} onChange={locationChange} placeholderText="Select a Location" isDisabled={false} isClearable={true}/>
        <Dropdown options={tournaments} onChange={tournamentChange} placeholderText="Select a Tournament" isDisabled={false} isClearable={true}/>
        <Dropdown options={firstSide} onChange={firstSideFilter} placeholderText="Select the First Team's Side" isDisabled={false} isClearable={true}/>
        <Dropdown options={firstWin} onChange={firstWinFilter} placeholderText="Select the First Team's Outcome" isDisabled={false} isClearable={true}/>
        </div>:null
      
    }{
      !show?<button onClick={()=>setShow(true)} >Show Advanced Selections</button>:null
    }
    </div>
  );

}


export default ToggleButton