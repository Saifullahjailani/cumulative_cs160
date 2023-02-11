import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import TopBar from "../../components/TopBar";
import "./index.css";

const ViewRecords = () => {
  const location = useLocation();
  const navigation = useNavigate();

  const { vacine, manuf, date, address, clinic, token, product } =
    location.state;
  return (
    <div>
      <TopBar title="Detail" />
      <div className="VacDisplay">
        <p className="middleText">{vacine}</p>
        <div className="bottomVacRec">
          <div className="leftDiv">
            <p className="info">Info:</p>
            <p>Vacine: </p>
            <p className="leftA">{vacine} </p>
            <p>Product Name: </p>
            <p className="leftA">{product} </p>
            <p>Manufacturer:</p>
            <p className="leftA">{manuf} </p>
            <p>Date:</p>
            <p className="leftA">{date} </p>
            <p>Clinic:</p>
            <p className="leftA">{clinic} </p>
            <p>Address:</p>
            <p className="leftA">{address} </p>
          </div>
        </div>
      </div>

      <Button
        txt="Edit Record"
        position={{ top: "85vh", left: "50vw" }}
        size={{ width: "38vw", height: "6vh" }}
        func={handleClick}
        params={{}}
      />
      <Button
        txt="Back"
        bg="white"
        position={{ top: "85vh", left: "10vw" }}
        size={{ width: "38vw", height: "6vh" }}
        path={-1}
      />
    </div>
  );
  function handleClick(params) {
    navigation("/editRecord", { state: location.state });
  }
};

export default ViewRecords;
