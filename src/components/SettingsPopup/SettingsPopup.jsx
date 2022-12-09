import "./settingsPopup.css";
import statsIcon from "../../assets/stats.svg";
import teamIcon from "../../assets/profile.svg";
import { Link } from "react-router-dom";

export const SettingsPopup = () => {
  return (
    <div className="settings-popup">
      <div className="settings-popup-row">
        <Link to="/team2-eitc/stats">
          <img src={statsIcon} alt="statistics-icon" />
          <p>Statistics</p>
        </Link>
      </div>
      <div className="settings-popup-row">
        <img src={teamIcon} alt="statistics-icon" />
        <p>Team management</p>
      </div>
    </div>
  );
};
