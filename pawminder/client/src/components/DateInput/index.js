import React from "react";

import "./Date.css";

const DateInput = ({ bg, fontColor, position, setState }) => {
  return (
    <input
      className="Date"
      type="date"
      placeholder="08-17-1999"
      onChange={(val) => {
        setState(val.target.value);
      }}
      style={{
        backgroundColor: bg || "rgba(24, 22, 22, 0.25)",
        color: fontColor || "black",
        top: position.top,
        left: position.left,
      }}
    />
  );
};

export default DateInput;
