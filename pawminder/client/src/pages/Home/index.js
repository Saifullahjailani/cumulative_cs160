import React from "react";
import "./home.css";
import { AuthContext } from "../../UserContext";
import HOST from "../../localhost";
import NavBar from "../../components/NavBar";
import PhotoCard from "../../components/PhotoCard";
import { useEffect, useState, useRef } from "react";
import logo from "../../assets/add.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Fetch from "../../Fetch";

axios.defaults.withCredentials = true;

const getList = HOST + "/getDogsList";
const childs = HOST + "/getDog";
const Home = () => {
  let myref = useRef();
  const [dogs, setDogs] = useState([]);
  const navigate = useNavigate();
  const [sePage, setSePage] = useState("");
  const ctx = React.useContext(AuthContext);

  useEffect(() => {
    Fetch(getList, childs, setDogs);
  }, []);
  const child = dogs.map((dog, i) => (
    <PhotoCard
      name={dog.name}
      imageSrc={dog.file}
      sex={dog.isMale}
      breed={dog.breed}
      key={i}
      select={true}
      token={dog.token}
    ></PhotoCard>
  ));
  return (
    <div className="home">
      <div className="top" ref={myref}>
        {child}
      </div>
      <button className="add-btn" onClick={() => navigate("/addInfo")}>
        <img src={logo}></img>
      </button>
      <NavBar />
    </div>
  );
};

function getTheList() {
  return axios
    .post(getList, { message: "getDogsList" })
    .then((resp) => {
      return resp.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export default Home;
