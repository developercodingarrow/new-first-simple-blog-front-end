"use client";
import React from "react";
import styles from "./css/submitbtn.module.css";

export default function SubmitBtn(props) {
  const { btnText } = props;
  return (
    <div className={styles.com_container}>
      <button type="submit" className={styles.btn_style}>
        {" "}
        {btnText}
      </button>
    </div>
  );
}
