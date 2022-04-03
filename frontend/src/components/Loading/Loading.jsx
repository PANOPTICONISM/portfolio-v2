import React from "react";
import { images } from "../../images";
import "./loading.css";

const LoadingScreen = () => {
  return (
    <div className="loading_screen">
      <img src={images.Logo} alt="panopticonism-logo" />
    </div>
  );
};

export default LoadingScreen;
