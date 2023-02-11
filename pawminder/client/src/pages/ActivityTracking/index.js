import React, { useEffect } from "react";
import "./index.css";
import NavBar from "../../components/NavBar";
import PhotoCard from "../../components/PhotoCard";
import Button from "../../components/Button";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import HOST from "../../localhost";

const ActivityTracking = () => {
  const navigate = useNavigate();

  let sz = { height: "2vh", width: "80vw" };
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
        <p className="title-my">Activity Traking</p>
        <div className="title-box">
          <p className="title">{dog.name}</p>{" "}
        </div>
      </div>
      <Button
        position={{ top: "51vh", left: "10vw" }}
        size={sz}
        txt="Diet"
        params={{ path: "/dietTracking" }}
        func={gotTo}
      />
      <Button
        position={{ top: "57vh", left: "10vw" }}
        size={sz}
        txt="Feces"
        params={{ path: "/feces" }}
        func={gotTo}
      />
      <Button
        position={{ top: "63vh", left: "10vw" }}
        size={sz}
        txt="Sleep"
        params={{ path: "/sleep" }}
        func={gotTo}
      />
      <Button
        position={{ top: "69vh", left: "10vw" }}
        txt="Exercises"
        params={{ path: "/exercise" }}
        size={sz}
        func={gotTo}
      />

      <Button
        position={{ top: "79vh", left: "10vw" }}
        size={sz}
        txt="Grooming"
        params={{ path: "/grooming" }}
        func={gotTo}
      />
      <Button
        position={{ top: "85vh", left: "10vw" }}
        txt="Shower"
        params={{ path: "/shower" }}
        size={sz}
        func={gotTo}
      />

      <NavBar></NavBar>
    </div>
  );

  function gotTo({ path }) {
    navigate(path, { state: dog });
  }
};

export default ActivityTracking;
