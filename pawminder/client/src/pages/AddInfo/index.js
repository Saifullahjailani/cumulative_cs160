import React from "react";
import "./addInfo.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import DateInput from "../../components/DateInput";
import HOST from "../../localhost";
import BinaryRadio from "../../components/BinaryRadio";
import FileInputButton from "../../components/FileButton";
import PhotoCard from "../../components/PhotoCard";
import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

const AddInfo = () => {
  const [name, setUsername] = useState("");
  const [breed, setBreed] = useState("");
  const [date, setDate] = useState("");
  const [isMale, setIsMale] = useState("");
  const [file, setFile] = useState("");
  const [hiden, setHiden] = useState("");
  const navigate = useNavigate();

  async function createDog(data) {
    const send = await axios
      .post(HOST + "/saveDogInfo", data)
      .then(function (response) {})
      .catch((err) => {
        console.log(err);
      });
    navigate("/home");
  }
  function getFile({ setState }) {
    HiddenInput.handleClick();
  }
  return (
    <div className="addInfo">
      <Input
        def={"Name"}
        setState={setUsername}
        position={{ top: "10vh", left: "15vw" }}
        bg="rgba(24, 22, 22, 0.25)"
      />
      <Input
        def={"Breed"}
        setState={setBreed}
        position={{ top: "20vh", left: "15vw" }}
        bg="rgba(24, 22, 22, 0.25)"
      />
      <DateInput position={{ top: "30vh", left: "15vw" }} setState={setDate} />

      <BinaryRadio
        position={{ top: "40vh", left: "15vw" }}
        setState={setIsMale}
      />

      <FileInputButton
        position={{ top: "50vh", left: "15vw" }}
        txt="Add Picture"
        setState={setFile}
      />
      {file && (
        <PhotoCard
          pos={{ top: "58vh", left: "15vw" }}
          size={{ width: "70vw", height: "16vh" }}
          imageSrc={file}
        />
      )}
      <Button
        txt="Add Profile"
        position={{ top: "75vh", left: "15vw" }}
        params={{
          name,
          breed,
          date,
          isMale,
          file,
          vacinationRecord: [],
          groomningRecord: [],
          hairCutRecord: [],
          reminders: [],
        }}
        func={createDog}
      />
      <Button
        txt="Discard"
        position={{ top: "85vh", left: "15vw" }}
        path={-1}
      />
    </div>
  );
};

const HiddenInput = () => {
  const hiddenInput = useRef(null);
  const handleClick = () => {
    hiddenInput.current.click();
  };

  return <input type="file"></input>;
};

export default AddInfo;
