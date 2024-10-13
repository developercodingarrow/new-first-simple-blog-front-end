import React from "react";
import styles from "./css/tableboldtext.module.css";
export default function TableBlodtext(props) {
  const { data = [] } = props;
  const truncatedData = data.length > 50 ? `${data.slice(0, 50)}...` : data;
  return (
    <div className={styles.text_wrapper}>
      <h5>{truncatedData}</h5>
    </div>
  );
}
