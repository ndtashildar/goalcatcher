import React, {useState} from 'react';
import '../index.css'
export default function Dropdown(){
    let teams = [
        { label: "Apple", value: "🍎" },
        { label: "Banana", value: "🍌" },
        { label: "Orange", value: "🍊" }
    ]
    
    // Using state to keep track of what the selected fruit is
    let [team, setTeam] = useState("⬇️ Select a Team ⬇️")
    
    // Using this function to update the state of fruit
    // whenever a new option is selected from the dropdown
    let handleTeamChange = (e) => {
      setTeam(e.target.value)
    }

    return (
        <div className="Dropdown">
        {/* Displaying the value of fruit */}
        {team}
        <br />
    
        <select onChange={handleTeamChange}> 
          <option value="⬇️ Select a Team ⬇️"> -- Select a Team -- </option>
                {/* Mapping through each fruit object in our fruits array
              and returning an option element with the appropriate attributes / values.
             */}
          {teams.map((team) => <option value={team.value}>{team.label}</option>)}
        </select>
        </div>
    );
    
}

