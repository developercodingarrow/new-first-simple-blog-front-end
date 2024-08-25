"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import styles from "./css/homepagelist.module.css";
import LandscapeCard from "../../server-components/cards/LandscapeCard";
import { tagfillterBlogs } from "@/src/Actions/blogActions/blogAction";

export default function HomePageBlogList(props) {
  const { initialData, tagquery, initialPage } = props;
  const [data, setData] = useState(initialData);
  const [page, setPage] = useState(initialPage || 2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();

  console.log(data);

  const observer = useRef();

  const lastBlogElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    const fetchMoreBlogs = async () => {
      setLoading(true);
      try {
        const res = await tagfillterBlogs(tagquery, page);
        setData((prevData) => [...prevData, ...res.data.result]);
        setHasMore(res.data.result.length > 0);
        router.replace(`?tag=${tagquery}&page=${page}`);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    if (page > initialPage) {
      fetchMoreBlogs();
    }
  }, [tagquery, page]);
  return (
    <div className={styles.cards_wraper}>
      {data.map((el, index) => {
        if (index === data.length - 1) {
          return (
            <div ref={lastBlogElementRef} key={index}>
              <LandscapeCard data={el} />
            </div>
          );
        } else {
          return <LandscapeCard key={index} data={el} />;
        }
      })}
      {loading && <p>Loading more blogs...</p>}
    </div>
  );
}
