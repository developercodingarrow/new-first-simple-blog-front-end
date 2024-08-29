"use client";
import React from "react";
import styles from "./css/textClickBtn.module.css";
export default function TextClickBtn(props) {
  const { text, color, onClick } = props;
  return (
    <button
      className={styles.textClickBtn}
      style={{ color: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
