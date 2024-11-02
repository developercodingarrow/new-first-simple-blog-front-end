import React from "react";
import styles from "./css/tableboldtext.module.css";
export default function TableText(props) {
  const { data = [] } = props;

  return (
    <div className={styles.text_wrapper}>
      <div className={`dark_text_color small_text`}>
        <p>{data}</p>
      </div>
    </div>
  );
}
