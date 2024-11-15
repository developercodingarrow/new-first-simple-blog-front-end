import React from "react";
import styles from "./noContentmsg.module.css";
export default function NoContentMsg() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🚀</div>{" "}
      {/* Fun icon to add a friendly vibe */}
      <h2 className={styles.heading}>Oops! There's no content here.</h2>
      <p className={styles.subtext}>
        It looks like we couldn't find any data. Check back later or explore
        other content on the platform.
      </p>
      <button className={styles.exploreButton}>Explore More</button>
    </div>
  );
}
