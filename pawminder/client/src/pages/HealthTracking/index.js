import React from "react";
import Navbar from "../../components/NavBar";
import "./index.css";
import injection from "../../assets/List Menu.svg";
import redCross from "../../assets/List Menu-1.svg";
import TopBar from "../../components/TopBar";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const HealthTracking = () => {
  const navigate = useNavigate();
  const { obj } = useParams();
  return (
    <div className="healthTracking">
      <p>Health Traking</p>
      <div className="lowerdiv">
        <div>
          <button
            onClick={() => {
              navigate("/vaccination/" + obj);
            }}
          >
            <img src={injection} />
          </button>
        </div>
        <div>
          <button onClick={() => navigate("/reminders/" + obj)}>
            <img src={redCross}></img>
          </button>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default HealthTracking;
