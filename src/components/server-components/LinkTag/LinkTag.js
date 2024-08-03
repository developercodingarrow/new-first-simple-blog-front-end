import React from "react";
import styles from "./css/linktag.module.css";
import Link from "next/link";

export default function LinkTag() {
  return (
    <Link href={"/"} className={styles.tag_link}>
      link tag
    </Link>
  );
}
