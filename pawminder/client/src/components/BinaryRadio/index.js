import React from "react";
import "./binaryRadio.css";
const BinaryRadio = ({ position, setState }) => {
  return (
    <form
      className="radio"
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      <div className="divs">
        <label className="labels" htmlFor="gender">
          Male
        </label>
        <label className="labels" htmlFor="gender">
          Female
        </label>
      </div>
      <div>
        <input
          type="radio"
          name="gender"
          onClick={() => {
            setState(true);
          }}
        ></input>

        <input
          type="radio"
          name="gender"
          onClick={() => {
            setState(false);
          }}
        ></input>
      </div>
    </form>
  );
};

export default BinaryRadio;
