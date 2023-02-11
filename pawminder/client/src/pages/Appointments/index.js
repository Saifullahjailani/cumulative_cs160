import React from "react";
import Navbar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import "./index.css";
import logo from "../../assets/call 3.png";
import add from "../../assets/add.png";
import HOST from "../../localhost";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Fetch from "../../Fetch";
import { useContext, createContext } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

const getList = HOST + "/getRemsAPI";

const VacRecord = () => {
  const { obj } = useParams();
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const child = records.map((dog, i) => (
    <div className="reminder-Palletes" key={i}>
      <p className="right-aligh-rem activity">{dog.activity}</p>
      <div className="date-and-time">
        <p className="left-aligh-rem">
          {new Date(dog.value).toLocaleDateString()}
        </p>
        <p className="left-aligh-rem">
          {new Date(dog.value).toLocaleTimeString()}
        </p>
      </div>
      <div className="haha-box">
        <p className="right-aligh-rem">{dog.add}</p>
        <p className="right-aligh-rem">{dog.ph}</p>
      </div>

      <img className="left-aligh-rem" src={logo}></img>
    </div>
  ));

  const displayHome = <></>;
  useEffect(() => {
    axios
      .post(getList, { token: obj })
      .then((respo) => setRecords(respo.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <TopBar title="Reminders" />
      <div className="VacDisplay">{child}</div>
      <button
        className="add-btn-vac"
        onClick={() => navigate("/addreminder/" + obj)}
      >
        <img src={add}></img>
      </button>
      <Navbar />
    </div>
  );
};

const Record = ({ vacine, manuf, date, address, clinic, product, token }) => {
  const navigate = useNavigate();
  function hundleClick(e) {}
  const clkContex = createContext({
    vacine,
    manuf,
    date,
    address,
    clinic,
    product,
    token,
  });

  return (
    <div className="singleRecord" onClick={(e) => hundleClick(e)}>
      <p className="nameText">{vacine}</p>
      <p className="hospital">{manuf}</p>
      <p className="dateFormat">{date}</p>
    </div>
  );
};

export default VacRecord;
