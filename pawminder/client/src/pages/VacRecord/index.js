import React from "react";
import Navbar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import "./index.css";
import logo from "../../assets/add.png";
import HOST from "../../localhost";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Fetch from "../../Fetch";
import { useContext, createContext } from "react";

const getList = HOST + "/getRecordList";
const childs = HOST + "/getDog";

const VacRecord = () => {
  const { obj } = useParams();
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const child = records.map((dog, i) => (
    <Record
      key={i}
      vacine={dog.vacine}
      manuf={dog.manuf}
      date={dog.date}
      address={dog.address}
      clinic={dog.clinic}
      product={dog.product}
      token={dog.token}
    ></Record>
  ));

  const displayHome = <></>;
  useEffect(() => {
    Fetch(getList, childs, setRecords, obj);
  }, []);

  return (
    <div>
      <TopBar title="Vaccination Record" />
      <div className="VacDisplay">{child}</div>
      <button
        className="add-btn-vac"
        onClick={() => navigate("/addVacRecord/" + obj)}
      >
        <img src={logo}></img>
      </button>
      <Navbar />
    </div>
  );
};

const Record = ({ vacine, manuf, date, address, clinic, product, token }) => {
  const navigate = useNavigate();
  function hundleClick(e) {
    navigate("/recordsView", {
      state: {
        vacine,
        manuf,
        date,
        address,
        clinic,
        product,
        token,
      },
    });
  }
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
