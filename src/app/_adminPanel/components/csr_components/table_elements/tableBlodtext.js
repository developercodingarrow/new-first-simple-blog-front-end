import React from "react";
import styles from "./css/tableboldtext.module.css";
export default function TableBlodtext(props) {
  const { data } = props;
  return (
    <div className={styles.text_wrapper}>
      <h5>{data}</h5>
    </div>
  );
}
