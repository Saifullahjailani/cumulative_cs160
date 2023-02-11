import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
const activity = [
  "Sleepig",
  "Walking",
  "Exercising",
  "Wathing TV",
  "Taking Shower",
];
function getRandomAct() {
  return activity[Math.floor(Math.random() * activity.length)];
}

const PhotoCard = ({
  imageSrc,
  pos,
  size,
  name,
  breed,
  DOB,
  sex,
  select,
  token,
}) => {
  const navigate = useNavigate();
  let styler = {};
  let SEX = "Female";
  if (sex) {
    SEX = "Male";
  }
  if (pos) {
    styler = {
      position: "absolute",
      height: size.height,
      width: size.width,
      top: pos.top,
      left: pos.left,
    };
  }
  function handleClick(event) {
    event.preventDefault();
    if (select) {
      navigate("/selectDog/" + token);
    }
  }
  return (
    <div className="card" style={styler} onClick={(e) => handleClick(e)}>
      <img
        src={imageSrc}
        height={"100%"}
        width={"100%"}
        style={{
          position: "relative",
          top: "0",
          left: "0",
          objectFit: "fill",
        }}
      />

      {select && (
        <div className="homeName">
          <p>{name}</p>
          <p>
            {breed} - {SEX}
          </p>
          <p>{getRandomAct()}</p>
        </div>
      )}
    </div>
  );
};

export default PhotoCard;
