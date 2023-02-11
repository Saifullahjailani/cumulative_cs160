import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
const Button = ({ txt, path, position, func, params, size, bg }) => {
  let navigate = useNavigate();
  let styler = {
    top: position.top,
    left: position.left,
  };
  let txtStyler = {};
  if (size) {
    styler = { ...styler, width: size.width, height: size.height };
  }
  if (bg) {
    styler.backgroundColor = bg;
    styler.border = "0.1vh solid #ABABAB";
    txtStyler.color = "#ABABAB";
  }
  return (
    <button
      style={styler}
      className="button"
      onClick={(e) => {
        e.preventDefault();
        if (path) {
          navigate(path);
        } else {
          func(params);
        }
      }}
    >
      <p style={txtStyler}>{txt}</p>
    </button>
  );
};

export default Button;
