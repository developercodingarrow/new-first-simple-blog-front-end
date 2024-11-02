import React from "react";
import styles from "./css/linktag.module.css";
import Link from "next/link";

export default function LinkTag(props) {
  const { data, limit } = props;

  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <div className={styles.linkTag_wrapper}>
      {limitedData.map((el, index) => {
        return (
          <Link
            href={`tags/${el?.tagSlug}`}
            key={el._id}
            className={styles.tag_link}
          >
            {el.tagName}
          </Link>
        );
      })}
    </div>
  );
}
