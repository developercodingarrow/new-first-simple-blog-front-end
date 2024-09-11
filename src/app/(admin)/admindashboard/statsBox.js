import React from "react";
import styles from "./dashbordpagestyle.module.css";
export default function StatsBox(props) {
  const { title, number, color } = props;
  return (
    <div className={styles.statsBox} style={{ backgroundColor: color }}>
      <p className={styles.statTitle}>{title}</p>
      <p className={styles.statNumber}>{number}</p>
    </div>
  );
}
