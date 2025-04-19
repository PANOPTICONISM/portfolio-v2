import React from "react";
import styles from "./Loading.module.css";
import { Logo } from "public/icons/Logo";

const LoadingScreen = () => {
  return (
    <div className={styles.loading_screen}>
      <Logo width={50} height={83} />
    </div>
  );
};

export default LoadingScreen;
