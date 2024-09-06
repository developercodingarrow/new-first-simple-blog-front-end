import React from "react";
import styles from "./css/tableSearch.module.css";
import { HiMagnifyingGlass } from "../../../../ApplicationIcons";

export default function TableSearch(props) {
  const { searchFiled, placholder, searchHandel } = props;
  return (
    <div className={styles.flex_container}>
      <div className={styles.search_icon_wrapper}>
        <HiMagnifyingGlass />
      </div>
      <div className={styles.input_wrapper}>
        <input
          type="text"
          placeholder={placholder}
          className={styles.search_inputStyle}
          onChange={(e) => searchHandel(e.target.value, searchFiled)}
        />
      </div>
    </div>
  );
}
