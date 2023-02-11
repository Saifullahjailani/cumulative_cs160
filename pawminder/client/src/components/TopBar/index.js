import React from "react";
import logo from "../../assets/Navigation-Iconly-Light-outline-Iconly-Light-outline-Arrow - Left.svg";
import { useNavigate } from "react-router-dom";

const TopBar = ({ title, callBackFunc, callBackParam }) => {
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    if (callBackFunc) {
      callBackFunc(callBackParam);
    } else {
      navigate(-1);
    }
  }
  return (
    <div className="TobBar-div" style={styler}>
      <button
        style={button_styler}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <img src={logo} />
      </button>
      <p style={text_style}>{title}</p>
      <div></div>
    </div>
  );
};

export default TopBar;

const styler = {
  backgroundColor: "#8f839f",
  display: "flex",
  height: "10vh",
  width: "100vw",
  position: "absolute",
  left: "0",
  top: "0",
  padding: "5%",
  boxSizing: "border-box",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

const button_styler = {
  backgroundColor: "transparent",
  border: "none",
  float: "left",
};

const text_style = {
  color: "white",
  fontFamily: "Rubik",
  fontSize: "130%",
};
