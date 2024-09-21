"use client";
import React, { useEffect, useState } from "react";
import styles from "./css/tableBooleanSwitch.module.css";

export default function TableBooleanSwitch(props) {
  const { data, keyProp, completeData, handler } = props;
  const [isActive, setIsActive] = useState(data);

  const toggleSwitch = () => {
    handler(completeData._id);
    setIsActive(!isActive);
  };

  useEffect(() => {
    setIsActive(data);
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
