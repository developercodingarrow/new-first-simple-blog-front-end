"use client";
import React, { useEffect, useState } from "react";
import styles from "./css/tagTab.module.css";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
export default function TagTab(props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { tabData, redirectType } = props;
  const [isSticky, setIsSticky] = useState(false);

  const segments = pathname.split("/");
  const username = segments[2];
  console.log(username);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const stickyPosition = 250; // Change this value to control the sticky position
      setIsSticky(scrollTop > stickyPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`${styles.tab_container} ${isSticky ? styles.sticky : ""}`}>
      {/* Handle user profile link manually */}
      {redirectType === "userprofile" && (
        <>
          <Link href={`/profile/${username}`} className={styles.tab_warpper}>
            {/* Replace 'username' with the appropriate dynamic value */}
            About
          </Link>

          <Link
            href={`/profile/${username}/blogs`}
            className={styles.tab_warpper}
          >
            {/* Replace 'username' with the appropriate dynamic value */}
            blogs
          </Link>
        </>
      )}

      {/* Conditionally render tabData loop if tabData exists and is not empty */}
      {tabData &&
        tabData.length > 0 &&
        tabData.map((el, index) => {
          return (
            <>
              {redirectType === "query" ? (
                <Link
                  href={`?tag=${el.tagSlug}`}
                  className={styles.tab_warpper}
                  key={el._id}
                >
                  {el.tagName}
                </Link>
              ) : (
                <Link
                  href={`${el.hrfLink}`}
                  className={styles.tab_warpper}
                  key={el._id}
                >
                  {el.name}
                </Link>
              )}
            </>
          );
        })}
    </div>
  );
}
