import React from "react";
import styles from "./css/actionDropDown.module.css";
import { GoBlocked } from "../../ApplicationIcons";

export default function ActionDropDown() {
  return (
    <div className={styles.com_container}>
      <div>
        {" "}
        <GoBlocked />{" "}
      </div>
      <div className="small_text_wrapper">Report</div>
    </div>
  );
}
