"use client";
import React from "react";
import styles from "./css/clickbtn.module.css";
import BtnLoading from "../../loadings/BtnLoading";
export default function ClickBtn(props) {
  const { btnText, btnHandel, btndisable = true } = props;

  const handelClick = () => {
    btnHandel();
  };

  const btnClasses = `${styles.btn_style} ${
    btndisable ? "" : styles.disabled_btn
  }`;

  return (
    <div className={styles.com_container} onClick={handelClick}>
      <button type="button" className={btnClasses} disabled={!btndisable}>
        {btnText}
      </button>
    </div>
  );
}
