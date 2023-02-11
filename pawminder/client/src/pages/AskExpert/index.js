import React from "react";
import SolidTopBar from "../../components/SolidTopBar";
import Navbar from "../../components/NavBar";
import VideoPallet from "../../components/VideoPallet";
import "./index.css";
const AskExpert = () => {
  return (
    <div>
      <SolidTopBar></SolidTopBar>
      <Navbar></Navbar>
      <div className="videos-Display">
        <VideoPallet title="Dog Training 101" duration="20"></VideoPallet>
        <VideoPallet title="Training Mistakes" duration="15"></VideoPallet>
        <VideoPallet title="6 Tricks in 1 day" duration="10"></VideoPallet>
        <VideoPallet title="Traininig Plan" duration="35"></VideoPallet>
        <VideoPallet title="Dog Anxiety" duration="54"></VideoPallet>
        <VideoPallet
          title="How to be friend with Dog"
          duration="20"
        ></VideoPallet>
        <VideoPallet title="Dog Diet" duration="20"></VideoPallet>
        <VideoPallet title="Dogcipline " duration="4"></VideoPallet>
        <VideoPallet title="Dog Walk Guide" duration="30"></VideoPallet>
      </div>
    </div>
  );
};

export default AskExpert;
