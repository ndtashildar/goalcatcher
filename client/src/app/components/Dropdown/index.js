import { useState } from "react";
import "./index.scss";

const Dropdown = ({selected, setSelected}) => {
    const [isActive, setActive] = useState(false);
    const teams = ["England", "Brazil", "Portugal"];
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setActive(!isActive)}>
            {selected}
            <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {teams.map((team) => (
                        <div onClick={(e) => {
                            setSelected(team)
                            setActive(false);
                        }}
                        className="dropdown-item">
                            {team}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
