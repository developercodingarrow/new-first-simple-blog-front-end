import React from "react";
import styles from "./page.module.css";
export default function Loading() {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
        return (
          <div className={styles.skeletonCard}>
            <div className={styles.leftSection}>
              <div className={styles.bar} style={{ width: "80%" }}></div>
              <div className={styles.bar} style={{ width: "60%" }}></div>
              <div className={styles.bar} style={{ width: "90%" }}></div>
              <div className={styles.bar} style={{ width: "70%" }}></div>
            </div>
            <div className={styles.rightSection}>
              <div className={styles.imagePlaceholder}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
