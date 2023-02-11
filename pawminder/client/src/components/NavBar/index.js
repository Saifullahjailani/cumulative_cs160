import React from "react";
import { useNavigate } from "react-router-dom";
import "./nav.css";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <button
        className="left"
        onClick={(e) => {
          e.preventDefault();
          navigate("/askExperts");
        }}
      ></button>
      <button
        className="middle"
        onClick={() => {
          navigate("/home");
        }}
      ></button>
      <button
        className="right"
        onClick={() => {
          navigate("/profile");
        }}
      ></button>
    </nav>
  );
};

export default NavBar;
