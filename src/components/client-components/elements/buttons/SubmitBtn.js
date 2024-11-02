"use client";
import React, { useContext, useState } from "react";
import styles from "./css/submitbtn.module.css";
import BtnLoading from "../../loadings/BtnLoading";

export default function SubmitBtn(props) {
  const { btnText, btnLoading, disabled, btnClass } = props;

  // Apply the passed btnClass if available, otherwise use the default btn_style
  const btnClasses = `${styles[btnClass] || styles.btn_style} ${
    disabled ? styles.disabled_btn : ""
  }`;
  return (
    <div className={styles.com_container}>
      <button type="submit" className={btnClasses} disabled={disabled}>
        {btnLoading ? <BtnLoading /> : btnText}
      </button>
    </div>
  );
}
