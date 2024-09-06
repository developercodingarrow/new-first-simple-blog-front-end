"use client";
import React, { useEffect, useState } from "react";
import styles from "./css/tableBooleanSwitch.module.css";

export default function TableBooleanSwitch(props) {
  const { data, completeData, handler } = props;
  const [isActive, setIsActive] = useState(null);
  console.log("tag switch--", completeData);

  const toggleSwitch = () => {
    handler(data);
    setIsActive(!isActive);
  };

  useEffect(() => {
    setIsActive(completeData.Verification);
  }, []);

  return (
    <div
      className={`${styles.switch} ${isActive ? styles["switch-active"] : ""}`}
      onClick={toggleSwitch}
    >
      <div className={styles["switch-circle"]}></div>
    </div>
  );
}
