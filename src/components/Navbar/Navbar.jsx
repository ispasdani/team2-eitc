import "./navbar.css";
import adminPortrait from "../../assets/por.jpg";
import profileIcon from "../../assets/profile.svg";
import settingsIcon from "../../assets/settings.svg";
import menuIcon from "../../assets/menu.svg";
import { SettingsPopup } from "../SettingsPopup/SettingsPopup";
import { useState } from "react";

export const Navbar = () => {
  const [settingsPopup, setSettingsPopup] = useState(false);

  return (
    <div className="navbar-container">
      <p className="company-text">EAST INDIA TRADING CO.</p>
      <div className="navbar-right-side">
        <div className="navbar-username-container">
          <img
            src={adminPortrait}
            alt="user-name"
            className="navbar-admin-portrait"
          />
          <div>
            <p className="user-label">Jens Jensen</p>
            <p className="admin-label">Admin</p>
          </div>
        </div>
        <img
          src={profileIcon}
          alt="profile-icon"
          className="navbar-icons profile-icon-nav"
        />
        <img
          src={settingsIcon}
          alt="profile-icon"
          className="navbar-icons settings-icon-nav"
          onClick={() => setSettingsPopup(!settingsPopup)}
        />
        {settingsPopup && <SettingsPopup />}
        <img
          src={menuIcon}
          alt="profile-icon"
          className="navbar-icons menu-icon-nav"
        />
      </div>
    </div>
  );
};
