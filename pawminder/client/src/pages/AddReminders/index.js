import React from "react";
import Navbar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useState } from "react";
import { useParams } from "react-router-dom";
import HOST from "../../localhost";
import DateTimePicker from "react-datetime-picker";
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
  const navigate = useNavigate();
  const { obj } = useParams();
  const [value, onChange] = useState(new Date());
  function onSubmit(data) {
    axios
      .post(HOST + "/addRemApi", {
        vacinationRecord: data,
        token: obj,
        recToken,
      })
      .then((res) => hundle(res))
      .catch((err) => console.log(err));
  }

  function hundle(res) {
    if (res.data.message == "set") {
      navigate(-1);
    }
  }
  const [activity, setActivity] = useState("");
  const [add, setAddress] = useState("");
  const [ph, setPhnum] = useState("");
  return (
    <div>
      <TopBar title="Add Reminder" />

      <div className="VacDisplay">
        <DateTimePicker
          className="calender"
          onChange={onChange}
          value={value}
        />
        <Form v="Activity" setFunc={setActivity}></Form>
        <Form v="Address" setFunc={setAddress}></Form>
        <Form v="Phone Number" setFunc={setPhnum}></Form>
      </div>

      <Button
        txt="Schedule"
        position={{ top: "83vh", left: "30vw" }}
        size={{ height: "2vh", width: "40vw" }}
        params={{
          activity,
          add,
          ph,
          value,
        }}
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
