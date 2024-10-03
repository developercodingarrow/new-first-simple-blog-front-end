"use client";
import React, { useContext } from "react";
import styles from "./css/searchModel.module.css";
import { ModelsContext } from "@/src/app/_contextApi/ModelContextApi";
import TagSearchClient from "../../tags/elements/searchTags/TagSearchClient";
import { TagContext } from "@/src/app/_contextApi/TagContextApi";
import Link from "next/link";
export default function SearchModel() {
  const { searchModel, handelCloseSearchModel } = useContext(ModelsContext);
  const { filteredTags } = useContext(TagContext);

  return (
    <>
      {searchModel && (
        <div className={styles.conatiner}>
          <div className={styles.model_closeBar}>
            <div>
              <h2>Explore</h2>
            </div>
            <div onClick={handelCloseSearchModel}>x</div>
          </div>
          <div className={styles.search_wrapper}>
            <TagSearchClient search_containerStyle="model_search_container" />
          </div>
          <div className={styles.model_search_Result}>
            <div className={styles.linkTag_wrapper}>
              {filteredTags &&
                filteredTags.map((el, index) => {
                  return (
                    <Link
                      href={`/tags/${el.tagSlug}`}
                      className={styles.tag_link}
                    >
                      {el.tagName}
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
