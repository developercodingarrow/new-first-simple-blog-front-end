"use client";
import React, { useContext, useEffect } from "react";
import styles from "./tags.module.css";
import Link from "next/link";
import { TagContext } from "@/src/app/_contextApi/TagContextApi";
import TagSearchClient from "../searchTags/TagSearchClient";

export default function Tags() {
  const { filteredTags } = useContext(TagContext);

  useEffect(() => {}, [filteredTags]);
  return (
    <div className={styles.main_container}>
      <div className={styles.page_header}>
        <div>
          <h2>Explore topics</h2>
        </div>
        <div className={styles.serach_wrapper}>
          <TagSearchClient search_containerStyle="search_container" />
        </div>
      </div>
      <div className={styles.linkTag_wrapper}>
        {filteredTags &&
          filteredTags.map((el, index) => {
            return (
              <Link href={`/tags/${el.tagSlug}`} className={styles.tag_link}>
                {el.tagName}
              </Link>
            );
          })}
      </div>
    </div>
  );
}
