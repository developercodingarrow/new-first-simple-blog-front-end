import React from "react";
import styles from "./dashbordpagestyle.module.css";

const skeletonColors = [
  "rgba(59, 130, 246, 0.1)", // Light blue
  "rgba(16, 185, 129, 0.1)", // Light green
  "rgba(236, 72, 153, 0.1)", // Light pink
  "rgba(250, 204, 21, 0.1)", // Light yellow
  "rgba(59, 130, 246, 0.1)", // Light blue
  "rgba(16, 185, 129, 0.1)", // Light green
  "rgba(236, 72, 153, 0.1)", // Light pink
  "rgba(250, 204, 21, 0.1)", // Light yellow
  "rgba(59, 130, 246, 0.1)", // Light blue
  "rgba(236, 72, 153, 0.1)", // Light pink
  "rgba(250, 204, 21, 0.1)", // Light yellow
];

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.statsBoxWrapper}>
        {skeletonColors.map((color, index) => (
          <div
            key={index}
            className={`${styles.statsBox} ${styles.skeletonBox}`}
            style={{ backgroundColor: color }}
          >
            <div className={styles.skeletonTitle}></div>
            <div className={styles.skeletonNumber}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
