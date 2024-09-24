"use client";
import React, { useEffect, useState } from "react";
import styles from "./css/tagTab.module.css";
import Link from "next/link";

export default function TagTab(props) {
  const { tabData, redirectType } = props;
  const [isSticky, setIsSticky] = useState(false);

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
      {tabData.map((el, index) => {
        return (
          <>
            {redirectType === "query" ? (
              <Link href={`?tag=${el.tagSlug}`} className={styles.tab_warpper}>
                {el.tagName}
              </Link>
            ) : (
              <>
                <Link href={`${el.hrfLink}`} className={styles.tab_warpper}>
                  {el.name}
                </Link>
              </>
            )}
          </>
        );
      })}
    </div>
  );
}
