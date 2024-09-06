"use client";
import React from "react";
import styles from "./css/tablestatus.module.css";
export default function TableStatus(props) {
  const { data } = props;
  return (
    <div className={styles.status}>
      <span
        className={data.status === "active" ? styles.active : styles.pending}
      >
        {data}{" "}
      </span>{" "}
    </div>
  );
}
