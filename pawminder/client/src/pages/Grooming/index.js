import React from "react";
import Navbar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import logo from "../../assets/call 3.png";
import calender from "../../assets/calender.png";
import loc from "../../assets/location.png";
import HOST from "../../localhost";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams, location } from "react-router-dom";
import Fetch from "../../Fetch";
import { useContext, createContext } from "react";
import RecordRow from "../../components/RecordRow";
import "./index.css";

const Grooming = () => {
  const navigate = useNavigate();

  return (
    <div>
      <TopBar title="Grooming" />
      <div className="VacDisplay">
        <p className="recommendation" style={{ color: "#8f839f" }}>
          Scheduled Appointments
        </p>
        <div className="new-pallet-grooming-2">
          <p className="title-my" style={{ textAlign: "left" }}>
            Last Hair Cut
          </p>
          <div className="centerLine">
            <img src={calender} />
            <p>
              2022/09/10 <br />
              10:00 AM
            </p>
          </div>
          <div className="centerLine">
            <img src={loc} />
            <p>Kutz For Mutz Dog Grooming</p>
          </div>
        </div>
        <div className="new-pallet-grooming">
          <p className="title-my" style={{ textAlign: "left" }}>
            Grooming
          </p>
          <p className="left-al">
            2022/09/10 <br /> 10:00 AM{" "}
          </p>
          <p>
            Kutz For Mutz Dog Grooming <br />
            924 San Pablo Ave, Albany, CA 94706 <br />
            (510) 527-1788
          </p>
          <img className="left-al" src={logo}></img>
        </div>

        <button
          className="browsButton"
          onclick={(e) => navigate("/browseMore")}
        >
          <p className="recommendation" style={{ color: "#8f839f" }}>
            Add More +
          </p>
        </button>
      </div>

      <Navbar />
    </div>
  );
};

const styler = {
  marginBottom: "4rem",
};

export default Grooming;
