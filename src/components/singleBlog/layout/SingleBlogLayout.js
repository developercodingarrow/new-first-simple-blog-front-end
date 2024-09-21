import React from "react";
import styles from "./css/singleBlogLayout.module.css";
import SideBanner from "../../server-components/banners/SideBanner";

export default function SingleBlogLayout({ children }) {
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className={styles.banner_section}>
          <div className={styles.banner_wrapper}>
            <SideBanner />
          </div>
        </div>
        <div className={styles.page_content_section}>{children}</div>
      </div>
    </div>
  );
}
