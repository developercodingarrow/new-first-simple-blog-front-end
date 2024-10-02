import React from "react";
import styles from "./tagpageLayout.module.css";

export default function TagsPageLayout({ children }) {
  return <div className={styles.main_container}>{children}</div>;
}
