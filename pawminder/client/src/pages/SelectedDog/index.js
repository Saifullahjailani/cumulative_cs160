import React, { useEffect } from "react";
import "./selectDog.css";
import NavBar from "../../components/NavBar";
import PhotoCard from "../../components/PhotoCard";
import Button from "../../components/Button";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import HOST from "../../localhost";

const SelectDog = () => {
  let sz = { height: "3vh", width: "70vw" };
  const { obj } = useParams();
  const [dog, setDog] = useState({});

  useEffect(() => {
    axios
      .post(HOST + "/getDog", { token: obj })
      .then((resp) => {
        setDog(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);
  let gen = "Female";
  if (dog.isMale) {
    gen = "Male";
  }
  return (
    <div className="home">
      <PhotoCard
        pos={{ left: 0, right: 0 }}
        size={{ width: "100%", height: "50%" }}
        imageSrc={dog.file}
        select={false}
      />
      <div className="board">
        <div className="title-box">
          {" "}
          <p className="title">{dog.name}</p>{" "}
        </div>
        <div className="infoSelectDog">
          <div className="MiniBox">
            <p className="topText">{gen}</p>
            <p className="miniText">Sex</p>
          </div>
          <div className="MiniBox">
            <p className="topText">{dog.date}</p>
            <p className="miniText">Date of Birth</p>
          </div>
          <div className="MiniBox">
            <p className="topText">{dog.breed}</p>
            <p className="miniText">Breed</p>
          </div>
          <div className="MiniBox">
            <p className="topText">2Kg</p>
            <p className="miniText">Weight</p>
          </div>
        </div>
      </div>
      <Button
        position={{ top: "60vh", left: "15vw" }}
        size={sz}
        txt="Health Tracking"
        path={"/healthTraking/" + obj}
      />
      <Button
        position={{ top: "67vh", left: "15vw" }}
        size={sz}
        txt="Activity Tracking"
        path={"/activityTracking/" + obj}
      />
      <Button
        position={{ top: "74vh", left: "15vw" }}
        size={sz}
        txt="Diet Tracking"
        path={"/dietTracking/" + obj}
      />
      <Button
        position={{ top: "81vh", left: "15vw" }}
        txt="Ask Experts"
        path="/askExperts"
        size={sz}
      />
      <NavBar></NavBar>
    </div>
  );
};

export default SelectDog;
