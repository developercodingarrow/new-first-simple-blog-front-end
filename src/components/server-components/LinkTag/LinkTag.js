import React from "react";
import styles from "./css/linktag.module.css";
import Link from "next/link";

export default function LinkTag(props) {
  const { data } = props;

  return (
    <div className={styles.linkTag_wrapper}>
      {data.map((el, index) => {
        return (
          <Link href={"/"} key={el._id} className={styles.tag_link}>
            {el.tagName}
          </Link>
        );
      })}
    </div>
  );
}
