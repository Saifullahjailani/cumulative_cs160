import React from "react";
import "./index.css";

const RecordRow = ({ val1, val2, val3, styler }) => {
  return (
    <div className="bos-rec" style={styler}>
      <p className="val1-txt">{val1}</p>
      <p className="val2-txt">{val2}</p>
      <p className="val3-txt">{val3}</p>
    </div>
  );
};

export default RecordRow;
