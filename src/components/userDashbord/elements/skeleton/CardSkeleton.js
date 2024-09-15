import React from "react";
import styles from "./css/cardskeleton.module.css";
export default function CardSkeleton() {
  return (
    <div className={styles.main_container}>
      <div className={styles.card_body}>
        <div className={styles.card_image_wrapper}></div>
        <div className={styles.content_wrapper}>
          <div className={styles.title}></div>
          <div className={styles.title}></div>
        </div>
      </div>
      <div>
        <div className={styles.container}>
          <div className={styles.inner_container}>
            <div className={styles.date_box}></div>
            <div className={styles.action_wrapper}>
              <div className={styles.dote}></div>
              <div className={styles.dote}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
