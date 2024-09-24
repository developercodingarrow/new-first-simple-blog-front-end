"use client";
import { useState, useEffect, useRef, useCallback, Suspense } from "react";
import styles from "./css/homepagelist.module.css";
import LandscapeCard from "../../server-components/cards/LandscapeCard";
import { tagfillterBlogs } from "@/src/Actions/blogActions/blogAction";

export default function HomePageBlogList({ pageQuery, oldData }) {
  const [data, setData] = useState(oldData);

  useEffect(() => {
    console.log("page load");
  }, [pageQuery, oldData]);

  useEffect(() => {
    async function fetchData() {
      const res = await tagfillterBlogs(pageQuery);
      setData(res.data.result);
    }

    fetchData();
  }, [pageQuery]);
  return (
    <>
      <div className={styles.cards_wraper}>
        {data.length === 0 ? (
          <p>No additional blogs found.</p>
        ) : (
          data.map((blog) => <LandscapeCard key={blog._id} data={blog} />)
        )}
      </div>
    </>
  );
}
