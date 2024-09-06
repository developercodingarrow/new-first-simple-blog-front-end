import React from "react";
import styles from "./css/tableBooleantext.module.css";
export default function TableBooleanText(props) {
  const { data } = props;

  return (
    <div>
      <span
        className={`${styles.status} ${
          data ? styles.active : styles.pending
        }  `}
      >
        {data ? "verfified" : "pending"}
      </span>
    </div>
  );
}
