import React from 'react'
import Select from 'react-select'

const colorStyles = {
  container: styles => ({ ...styles, backgroundColor: '#edeee4', width: 300, margin: 10}),
  control: styles => ({ ...styles, backgroundColor: '#edeee4', width: 300}),
  dropdownIndicator: styles => ({ ...styles, backgroundColor: '#edeee4', color: '#FEC310'}),
  clearIndicator: styles => ({ ...styles, backgroundColor: '#edeee4', color: '#FEC310'}),
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

const Dropdown = ({options, onChange, placeholderText, isDisabled, isClearable}) => {
  return (
    <div className="dropdown">
      <Select
      options={options}
      styles={colorStyles}
      onChange={onChange}
      placeholder={placeholderText}
      isDisabled={isDisabled}
      isClearable={isClearable}
      isSearchable/>
    </div>
  )
}

export default Dropdown;