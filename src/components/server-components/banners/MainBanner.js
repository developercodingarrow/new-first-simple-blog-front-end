import React from "react";
import styles from "./css/mainbanner.module.css";
import Image from "next/image";
import main_bannerImg from "../../../../public/web-static-img/main-banner.png";
export default function MainBanner() {
  return (
    <div className={styles.com_compoanent}>
      <Image
        src={main_bannerImg}
        width={900}
        height={900}
        alt="Main-banner"
        className={styles.banner_imgStyle}
      />
    </div>
  );
}
