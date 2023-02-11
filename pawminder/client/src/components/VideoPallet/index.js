import React from "react";
import logo from "../../assets/video.png";
import "./index.css";
const VideoPallet = ({ title, duration }) => {
  return (
    <div className="VideoPallet">
      <img src={logo}></img>
      <div className="LowerDivVideo">
        <p className="VideoPalletTitle">{title}</p>
        <p>{duration} min</p>
      </div>
    </div>
  );
};

export default VideoPallet;
