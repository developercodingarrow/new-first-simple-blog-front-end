import React from "react";
import styles from "./css/btnLoading.module.css";
export default function BtnLoading() {
  return (
    <div className={styles.btnLoadingContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
}
