import React from "react";
import styles from "./page.module.css";
import BoxCard from "@/src/components/tags/tagSlug/BoxCard";
import { featureblogByTag } from "../../actionapi";

async function getData(slug) {
  const res = await featureblogByTag(slug);
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return await res.data.result;
}

export default async function Tagpage(pathname) {
  const slug = pathname.params?.slug;
  const data = await getData(slug);
  return (
    <div className={styles.main_container}>
      <div className={styles.page_header}>
        <div>
          <h1>Blogs Realted To - </h1>
        </div>
        <div className={styles.serach_topic}>
          <h1>{slug}</h1>
        </div>
      </div>
      <div className={styles.card_section}>
        {data.map((el, index) => {
          return (
            <div className={styles.card_wrapper} key={el._id}>
              <BoxCard data={el} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
