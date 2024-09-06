import React from "react";
import styles from "./css/tableSingleImg.module.css";
import Image from "next/image";
import sampleImg from "../../../../../../public/web-static-img/blog sample image.png";
export default function TableSingleImg() {
  return (
    <div className={styles.image_wrapper}>
      <Image
        src={sampleImg}
        width={300}
        height={300}
        className={styles.img_style}
      />
    </div>
  );
}
