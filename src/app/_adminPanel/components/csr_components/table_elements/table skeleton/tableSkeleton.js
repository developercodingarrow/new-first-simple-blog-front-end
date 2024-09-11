import React from "react";
import styles from "./tablesketon.module.css";
export default function TableSkeleton(props) {
  const { rowsNumber } = props;
  return (
    <div className={styles.container}>
      {[...Array(rowsNumber)].map(() => {
        return <div className={styles.table_row}></div>;
      })}
    </div>
  );
}
