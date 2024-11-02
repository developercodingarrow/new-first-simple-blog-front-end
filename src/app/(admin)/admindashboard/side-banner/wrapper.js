import React from "react";
import styles from "./page.module.css";
import SideBannerLayout from "@/src/components/sidebanner/SideBannerLayout";
export default function Wrapper() {
  return (
    <div className={styles.container}>
      <div className={styles.page_header}>
        <div>
          <h2>Side Banner</h2>
        </div>
        <div></div>
      </div>
      <div>
        <SideBannerLayout />
      </div>
    </div>
  );
}
