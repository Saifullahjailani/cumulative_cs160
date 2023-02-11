import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/profileBar.png";
let side = ">";

const SolidTopBar = ({ title }) => {
  const [on, onClick] = React.useState(true);
  if (on) {
    side = ">";
  } else {
    side = "<";
  }
  return (
    <>
      <div className="SolidTopBar">
        <p className="title-solid">Trainig Videos</p>
        <ProfileHandle></ProfileHandle>
        <FilterBar clk={on} func={onClick}></FilterBar>
      </div>
    </>
  );
};

const ProfileHandle = () => {
  const navigate = useNavigate();
  return (
    <div className="ProfileHandle" onClick={(e) => navigate("/profile")}>
      <button className="ProfileHandleButton">
        <img src={Logo} />
      </button>
    </div>
  );
};

const FilterBar = ({ clk, func }) => {
  return (
    <>
      <div
        className="filterBar"
        onClick={(e) => {
          e.preventDefault();
          func(!clk);
        }}
      >
        <p>Filter</p>
        <p>{side}</p>
      </div>
      {clk || <Menu></Menu>}
    </>
  );
};

const Menu = () => {
  return (
    <div className="mainMenuComp">
      <p className="title-main">Filters</p>

      <p>Lenght</p>
      <Checkbox title="< 10 mins"></Checkbox>
      <Checkbox title="< 10 - 30 mins"></Checkbox>
      <Checkbox title="> 30 mins"> </Checkbox>
      <p> Sort By</p>
      <Checkbox title="Data Uploaded"></Checkbox>
      <Checkbox title="Views"></Checkbox>
    </div>
  );
};

const Checkbox = ({ title }) => {
  return (
    <div className="checkers">
      <input type="checkbox" name="check" className="box-check"></input>
      <label htmlFor="check">{title}</label>
    </div>
  );
};

export default SolidTopBar;
