import React from "react";
import styles from "./mainbanner.module.css";
import UplodedImage from "@/src/components/adminComponent/mainbanner/uploderdImage/UplodedImage";
import UploadBanner from "@/src/components/adminComponent/mainbanner/uplodBanner/UploadBanner";

export default function MainBannerwrapper() {
  return (
    <div className={styles.main_conntainer}>
      <div className={styles.page_header}>
        <h3> Main Banner</h3>
      </div>
      <div className={styles.component_wrraper}>
        <UplodedImage />
      </div>
      <div className={styles.component_wrraper}>
        <UploadBanner />
      </div>
    </div>
  );
}
