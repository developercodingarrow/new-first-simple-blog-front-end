"use client";
import React from "react";
import styles from "./css/submitbtn.module.css";

export default function SubmitBtn(props) {
  const { btnText, disabled } = props;

  const btnClasses = `${styles.btn_style} ${
    disabled ? styles.disabled_btn : ""
  }`;
  return (
    <div className={styles.com_container}>
      <button type="submit" className={btnClasses} disabled={disabled}>
        {" "}
        {btnText}
      </button>
    </div>
  );
}
