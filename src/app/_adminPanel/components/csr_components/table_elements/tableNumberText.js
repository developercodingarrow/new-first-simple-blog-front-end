import React from "react";
import styles from "./css/tableNumbertext.module.css";
export default function TableNumberText(props) {
  const { data } = props;
  return <div className={styles.number_wrapper}> {data} </div>;
}
