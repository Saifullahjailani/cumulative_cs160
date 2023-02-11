import React from "react";
import Navbar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import "./index.css";
import logo from "../../assets/add.png";
import HOST from "../../localhost";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams, location } from "react-router-dom";
import Fetch from "../../Fetch";
import { useContext, createContext } from "react";
import RecordRow from "../../components/RecordRow";
import "./index.css";

const DietTraking = () => {
  const navigate = useNavigate();

  return (
    <div>
      <TopBar title="Diet" />
      <div className="VacDisplay">
        <div className="circular">
          <p className="my-txt-rec  rec-rec">250 Kcal</p>
          <p className="my-txt-rec">400 Kcal needed</p>
        </div>
        <RecordRow
          val1="132 Kcal"
          val2="dog food"
          val3="10:00 AM"
          style={styler}
        />
        <RecordRow val1="132 Kcal" val2="meet" val3="1:03 PM" style={styler} />
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

export default DietTraking;
