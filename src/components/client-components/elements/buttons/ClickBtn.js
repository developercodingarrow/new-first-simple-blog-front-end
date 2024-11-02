"use client";
import React from "react";
import styles from "./css/clickbtn.module.css";
import BtnLoading from "../../loadings/BtnLoading";
export default function ClickBtn(props) {
  const {
    btnText,
    btnHandel,
    btnLoading,
    btndisable = false,
    btnClass,
  } = props;

  const handelClick = () => {
    if (!btndisable) {
      btnHandel();
    }
  };

  const btnClasses = `${styles[btnClass] || styles.btn_style} ${
    btndisable ? styles.disabled_btn : ""
  }`;

  return (
    <div className={styles.com_container} onClick={handelClick}>
      <button type="button" className={btnClasses} disabled={btndisable}>
        {btnLoading ? <BtnLoading /> : btnText}
      </button>
    </div>
  );
}
