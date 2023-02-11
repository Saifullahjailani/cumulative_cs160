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
import Button from "../../components/Button";
const Shower = () => {
  const navigate = useNavigate();

  return (
    <div>
      <TopBar title="Shower" />
      <div className="VacDisplay">
        <div className="new-pallet-grooming-2">
          <p className="title-my" style={{ textAlign: "left" }}>
            Last Shower
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
            <p>Home</p>
          </div>
        </div>
        <p className="recommendation" style={{ color: "#8f839f" }}>
          Dog Grooming Suplies
        </p>

        <p
          className="recommendation"
          style={{ color: "#8f839f", marginTop: "20vh" }}
        >
          Scheduled Services
        </p>
        <div className="new-pallet-grooming">
          <p className="title-my" style={{ textAlign: "left" }}>
            Shower
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

      <Button
        txt={"Shampo & Coat Care"}
        size={{ width: "70vw", height: "3vh" }}
        position={{ left: "15vw", top: "38vh" }}
        path="undefined"
      />
      <Button
        txt={"Grooming Tub"}
        size={{ width: "70vw", height: "3vh" }}
        position={{ left: "15vw", top: "44vh" }}
        path="undefined"
      />
      <Navbar />
    </div>
  );
};

const styler = {
  marginBottom: "4rem",
};

export default Shower;
