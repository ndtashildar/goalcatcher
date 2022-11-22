import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Dropdown from './Components/Dropdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <img src={logo} id="test"/>
        <h id="title"> Goal Catcher</h>
      </div> 
      <div id="instructions">
        <p>Choose countries to view their match histories!</p>
      </div>
      <div className='rowC'><Dropdown /><p id="vs">VS.</p><Dropdown /></div>
      <button className='content-button'>Search!</button>


        
      </header>
    </div>
  );
}

export default App;
