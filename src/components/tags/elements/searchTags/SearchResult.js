"use client";
import React, { useContext } from "react";
import styles from "./tagSerachClient.module.css";
import Link from "next/link";
import { TagContext } from "@/src/app/_contextApi/TagContextApi";

export default function SearchResult() {
  const { filteredTags } = useContext(TagContext);

  return (
    <div className={styles.search_result_container}>
      {filteredTags &&
        filteredTags.map((el, index) => {
          return (
            <Link href={`${el.tagSlug}`} className={styles.result_link}>
              {el.tagName}
            </Link>
          );
        })}
    </div>
  );
}
