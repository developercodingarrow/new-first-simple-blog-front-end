"use client";
import React from "react";
import styles from "./css/clickbtn.module.css";
export default function ClickBtn(props) {
  const { btnText, btnHandel } = props;

  const handelClick = () => {
    btnHandel();
  };

  return (
    <div className={styles.com_container} onClick={handelClick}>
      <button type="button" className={styles.btn_style}>
        {" "}
        {btnText}
      </button>
    </div>
  );
}
