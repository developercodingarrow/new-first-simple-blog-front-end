"use client";
import React, { useState } from "react";
import styles from "./css/radioElemnet.module.css";

export default function RadioElement(props) {
  const { selectedOption, onChange, radioOptions, inputLabel } = props;

  const handleRadioChange = (option) => {
    onChange(option);
  };

  return (
    <div className={styles.radio_container}>
      <div className={styles.radio_title}>{inputLabel}</div>
      <div className={styles.radioOptionBox}>
        {radioOptions.map((option, index) => (
          <div
            className={`${styles.radioOption} ${
              selectedOption === option ? styles.selected : ""
            }`}
            key={index}
            onClick={() => handleRadioChange(option)}
          >
            <div className={styles.outerCircle}>
              {selectedOption === option && (
                <div className={styles.innerDot}></div>
              )}
            </div>
            <div className={styles.radio_btn_textGap}>
              <label>{option}</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
