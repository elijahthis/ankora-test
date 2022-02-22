import React from "react";
import "../css/main.css";
import "../css/sideBar.css";
import ProfileImage from "./profileImg";
import logo from "../images/logo.svg";
import pic from "../images/doc.jpg";
import {
  BsSearch,
  BsFillCalendar2EventFill,
  BsPeopleFill,
} from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";

const SideBar = () => {
  return (
    <aside>
      <img src={logo} alt="" />
      <div className="aside-actions">
        <p>Quick Actions</p>
        <div>
          <BsSearch />
          <p className="xs">Search Anything</p>
        </div>
        <div>
          <GrAdd />
          <p className="xs">Add a New Patient</p>
        </div>
        <p>Manage</p>
        <div>
          <BsFillCalendar2EventFill />
          <p className="xs">Calendar</p>
          <span></span>
        </div>
        <div>
          <BsPeopleFill />
          <p className="xs">Manage Patients</p>
        </div>
        <div>
          <FiSettings />
          <p className="xs">Settings</p>
        </div>
      </div>
      <div className="short-info">
        <div>
          <ProfileImage imgUrl={pic} size={50} />
        </div>
        <div>
          <h3 className="sb">Acme Clinic Inc.</h3>
          <p className="xs">Marvin Tunji-Ola</p>
          <a href="#" className="xxs">
            View Profile
          </a>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
