import React from "react";
import styles from "./Loading.module.css";

const LoadingScreen = () => {
  return (
    <div className={styles.loading_screen}>
      <img src="/logo.svg" alt="panopticonism-logo" />
    </div>
  );
};

export default LoadingScreen;
