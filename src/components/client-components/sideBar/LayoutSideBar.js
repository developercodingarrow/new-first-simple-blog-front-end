"use client";
import React, { useEffect, useState } from "react";
import styles from "./css/layoutsidebar.module.css";
import SideBanner from "../../server-components/banners/SideBanner";
import LinkTag from "../../server-components/LinkTag/LinkTag";
import Link from "next/link";
export default function LayoutSideBar() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const stickyPosition = 200; // Change this value to control the sticky position
      setIsSticky(scrollTop > stickyPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`${styles.sidebar_container} ${isSticky ? styles.sticky : ""}`}
    >
      <div className={styles.element_wrapper}>
        <SideBanner />
      </div>

      <div className={styles.link_tab_container}>
        <div className={styles.linkTag_wrapper}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((el, index) => {
            return <LinkTag />;
          })}
        </div>
        <div className={styles.container_btn}>
          <Link href={"/"} className="small_text_wrapper">
            See more ..
          </Link>
        </div>
      </div>
    </div>
  );
}
