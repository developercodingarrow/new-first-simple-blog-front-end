"use client";
import React, { useContext, useState } from "react";
import styles from "./css/submitbtn.module.css";
import BtnLoading from "../../loadings/BtnLoading";
import { AppContext } from "@/src/contextApi/AppcontextApi";

export default function SubmitBtn(props) {
  const { isBtnLoading } = useContext(AppContext);
  const { btnText, btnLoading, disabled } = props;

  const btnClasses = `${styles.btn_style} ${
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
