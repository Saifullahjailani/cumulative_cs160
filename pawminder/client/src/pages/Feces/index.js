import React from "react";
import Navbar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import logo from "../../assets/add.png";
import HOST from "../../localhost";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams, location } from "react-router-dom";
import Fetch from "../../Fetch";
import { useContext, createContext } from "react";
import RecordRow from "../../components/RecordRow";

const Feces = () => {
  const navigate = useNavigate();

  return (
    <div>
      <TopBar title="Fecese Weekly Record" />
      <div className="VacDisplay">
        <RecordRow
          style={styler}
          val1="Hard Dry Pellet"
          val2="2022/08/04"
          val3="9:00 AM"
        />
        <RecordRow
          style={styler}
          val1="Moisture Log"
          val2="2022/08/05"
          val3="3:30 PM"
        />
        <RecordRow
          style={styler}
          val1="Diarrhoea"
          val2="2022/08/05"
          val3="1:03 PM"
        />
      </div>
      <button className="add-btn-vac">
        <img src={logo}></img>
      </button>
      <Navbar />
    </div>
  );
};

const styler = {
  marginBottom: "4rem",
};

export default Feces;
