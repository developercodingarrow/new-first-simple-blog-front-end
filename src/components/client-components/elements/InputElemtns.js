"use client";
import React, { forwardRef } from "react";
import styles from "./css/inputelements.module.css";

function InputElemtns(props, ref) {
  const { lable, inputType, ...inputProps } = props;
  return (
    <div className={styles.com_container}>
      <div className={styles.lable_wraper}>
        <label className={styles.lable_style}>{lable}</label>
      </div>
      <div className={styles.input_wrapper}>
        <input
          ref={ref}
          {...inputProps}
          suppressHydrationWarning={true}
          className={styles.input_style}
        />
      </div>
    </div>
  );
}

export default forwardRef(InputElemtns);
