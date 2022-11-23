import React from 'react'
import Select from 'react-select'

const teams = [
  { value: 0, label: ''},
  { value: 87, label: 'England' },
  { value: 40, label: 'Brazil' },
  { value: 14, label: 'Argentina' }
]

const colorStyles = {
  container: styles => ({ ...styles, backgroundColor: '#edeee4', width: 300, margin: 10}),
  control: styles => ({ ...styles, backgroundColor: '#edeee4', width: 300}),
  dropdownIndicator: styles => ({ ...styles, backgroundColor: '#edeee4', color: '#FEC310'}),
  input: styles => ({ ...styles, color: '#56042C'}),
  option: (styles, {isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? '#FEC310' : '#edeee4',
      color: '#56042C',
      cursor: isDisabled ? 'not-allowed' : 'default',
      width: 300
    };
  },
};


const Dropdown = ({onChange}) => {
  return (
    <div className="dropdown">
      <Select
      options={teams}
      styles={colorStyles}
      onChange={onChange}
      placeholder="Select Team"
      isSearchable/>
    </div>
  )
}

export default Dropdown;