import React from "react";
import styles from "./blogpage.module.css";

export default function Loading() {
  return (
    <div className={styles.skeletonPage}>
      <div className={styles.column} style={{ width: "20%" }}>
        <div className={styles.sidebar}></div>
        <div className={styles.sidebar}></div>
        <div className={styles.sidebar}></div>
      </div>
      <div className={styles.column} style={{ width: "60%" }}>
        <div className={styles.header}></div>
        <div className={styles.content}></div>
        <div className={styles.content}></div>
        <div className={styles.content}></div>
      </div>
      <div className={styles.column} style={{ width: "20%" }}>
        <div className={styles.sidebar}></div>
        <div className={styles.sidebar}></div>
        <div className={styles.sidebar}></div>
      </div>
    </div>
  );
}
