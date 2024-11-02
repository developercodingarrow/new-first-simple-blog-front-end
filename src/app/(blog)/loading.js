import React from "react";
import styles from "./blogpage.module.css";

export default function Loading() {
  return (
    <div className={styles.skeletonPage}>
      <div className={`${styles.column} ${styles.sidebar_column}`}>
        <div className={styles.sidebar}></div>
        <div className={styles.sidebar}></div>
        <div className={styles.sidebar}></div>
      </div>
      <div className={`${styles.column} ${styles.content_column}`}>
        <div className={styles.header}></div>
        <div className={styles.content}></div>
        <div className={styles.content}></div>
        <div className={styles.content}></div>
      </div>
      <div className={`${styles.column} ${styles.comment_column}`}>
        <div className={styles.sidebar}></div>
        <div className={styles.sidebar}></div>
        <div className={styles.sidebar}></div>
      </div>
    </div>
  );
}
