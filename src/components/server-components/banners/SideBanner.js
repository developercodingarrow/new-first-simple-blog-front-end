import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./css/sidebanner.module.css";
import sampleImg from "../../../../public/web-static-img/side-banner-img.jpg";

export default function SideBanner() {
  return (
    <Link href={"/"} className={styles.com_component}>
      <Image src={sampleImg} width={200} className={styles.img_style} />
    </Link>
  );
}
