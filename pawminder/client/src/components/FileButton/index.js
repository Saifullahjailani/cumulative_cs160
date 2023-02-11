import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./index.css";
const FileInputButton = ({ txt, position, setState }) => {
  let navigate = useNavigate();
  let hid = useRef(null);

  return (
    <div>
      <button
        style={{
          top: position.top,
          left: position.left,
        }}
        className="button"
        onClick={(e) => {
          e.preventDefault();
          hid.current.click();
        }}
      >
        <p>{txt}</p>
      </button>

      <input
        style={{
          position: "absolute",
          top: "-100vh",
        }}
        accept={
          ".png, .jpg, .JPG, .JPGE, .PNG, .HEIC, .heic, .jpeg, .JPEG, .svg, .SVG"
        }
        type="file"
        ref={hid}
        onChange={() => {
          process(setState, hid);
        }}
      />
    </div>
  );
};

function process(setState, hid) {
  let reader = new FileReader();
  reader.onload = () => {
    setState(reader.result);
  };
  reader.readAsDataURL(hid.current.files[0]);
}

export default FileInputButton;
