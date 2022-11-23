import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

//Import components
import Dropdown from "../../components/Dropdown";

//Import containers

const Landing = () => {
  return (
    <div className="Landing">
      <div className="inner container is-fluid">
        <h1 className="title is-xxxxl has-text-centered">Goal Catcher</h1>
        <p className="is-lg subtitle has-text-centered">
          Select Two Teams To Get Started
        </p>
        <div className="dropdowns">
          <Dropdown className= "dropdown"/>
          <Dropdown className= "dropdown"/>
        </div>
        <div className="buttons">
            <Link to="/another">
              <button className="button is-blue is-hollow is-large">
                Search
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;