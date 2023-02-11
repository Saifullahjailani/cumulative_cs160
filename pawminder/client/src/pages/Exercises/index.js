import React from "react";
import Navbar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import logo from "../../assets/exercise.png";
import HOST from "../../localhost";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams, location } from "react-router-dom";
import Fetch from "../../Fetch";
import { useContext, createContext } from "react";
import RecordRow from "../../components/RecordRow";
import "./index.css";

const Exercises = () => {
  const navigate = useNavigate();

  return (
    <div>
      <TopBar title="Exercise" />
      <div className="VacDisplay">
        <button
          className="small-add-buttom"
          onClick={() => navigate("/addFeces")}
        >
          Add
        </button>
        <img src={logo}></img>
        <p className="recommendation">Sleep Recomendation</p>

        <RecordRow
          style={styler}
          val3="Based on the information of your dog, it should get between 30 minutes and 2 hours of exercise every day."
        />
        <button
          className="browsButton"
          onclick={(e) => navigate("/browseMore")}
        >
          <p className="recommendation">Browse More +</p>
        </button>
      </div>

      <Navbar />
    </div>
  );
};

const styler = {
  marginBottom: "4rem",
};

export default Exercises;
