import React from "react";
import Navbar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useState } from "react";
import { useParams } from "react-router-dom";
import HOST from "../../localhost";
import axios from "axios";
axios.defaults.withCredentials = true;

const AddRecord = ({
  oldVaccine,
  oldProduct,
  oldManuf,
  oldDate,
  oldClinic,
  oldAddress,
  newTitle,
  newBtnText,
  recToken,
}) => {
  const defVaccine = oldVaccine || "";
  const defProd = oldProduct || "";
  const defManuf = oldManuf || "";
  const defdate = oldDate || "";
  const defClinic = oldClinic || "";
  const defAddress = oldAddress || "";
  const defTitle = newTitle || "Add Record";
  const defBtnTxt = newBtnText || "Save Record";
  const navigate = useNavigate();
  const { obj } = useParams();
  const [vacine, setVacine] = useState(defVaccine);
  const [product, setProduct] = useState(defProd);
  const [manuf, setManuf] = useState(defManuf);
  const [date, setDate] = useState(defdate);
  const [clinic, setClinic] = useState(defClinic);
  const [address, setAddress] = useState(defAddress);
  function onSubmit(data) {
    axios
      .post(HOST + "/addVacRecordApi", {
        vacinationRecord: data,
        token: obj,
        recToken,
      })
      .then((res) => hundle(res))
      .catch((err) => console.log(err));
  }

  function hundle(res) {
    if (recToken) {
      navigate(-2);
    }
    if (res.data.message == "set") {
      navigate(-1);
    }
  }
  return (
    <div>
      <TopBar title={defTitle} />
      <div className="VacDisplay">
        <Form v={"Vacine:"} setFunc={setVacine} def={defVaccine} />
        <Form v={"Product Name:"} setFunc={setProduct} def={defProd} />
        <Form v={"Manufacturer"} setFunc={setManuf} def={defManuf} />
        <Form v={"Date:"} setFunc={setDate} def={defdate} />
        <Form v={"Clinic:"} setFunc={setClinic} def={defClinic} />
        <Form v={"Address:"} setFunc={setAddress} def={defAddress} />
      </div>
      <Button
        txt={defBtnTxt}
        position={{ top: "83vh", left: "30vw" }}
        size={{ height: "2vh", width: "40vw" }}
        params={{ vacine, product, manuf, date, clinic, address }}
        func={onSubmit}
      />
      <Navbar />
    </div>
  );
};

const Form = ({ v, setFunc, def }) => {
  return (
    <div className="myForm">
      <p className="formLabel">{v}</p>
      <input
        type="text"
        defaultValue={def}
        className="inpForm"
        onChange={(e) => setFunc(e.target.value)}
      ></input>
    </div>
  );
};

export default AddRecord;
