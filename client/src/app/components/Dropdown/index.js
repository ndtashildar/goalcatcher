import React from 'react'
import Select from 'react-select'
import "./index.scss";

const teams = [
  { value: 1, label: 'England' },
  { value: 2, label: 'Brazil' },
  { value: 3, label: 'Argentina' }
]

function dropTheme(theme){
  return{
    ...theme,   
  }
}

const Dropdown = () => {
  return (
    <Select
    theme={dropTheme}
    options={teams}
    className="dropdown"
    placeholder="Select Team"
    isSearchable/>
  )
}

export default Dropdown;