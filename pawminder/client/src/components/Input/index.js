import React from "react";
import { useState } from "react";
import "./input.css";

const Input = ({ txt, position, setState, def, inpType, bg }) => {
  return (
    <input
      className="Input"
      type={inpType || "text"}
      placeholder={def || "Default Value"}
      onChange={(val) => {
        setState(val.target.value);
      }}
      style={{
        top: position.top,
        left: position.left,
        backgroundColor: bg || "rgba(255,255,255,0.7)",
      }}
    />
  );
};

export default Input;
