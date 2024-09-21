"use client";
import React, { useEffect, useState } from "react";
import styles from "./css/layoutsidebar.module.css";
import SideBanner from "../../server-components/banners/SideBanner";
import LinkTag from "../../server-components/LinkTag/LinkTag";
import Link from "next/link";
import { featureTagListAction } from "@/src/app/utils/tagActions";

export default function LayoutSideBar(props) {
  const { featureTag } = props;
  const [featureTags, setfeatureTags] = useState(featureTag);
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
      <div className={styles.sideBanner_wrapper}>
        <SideBanner />
      </div>

      <div className={styles.link_tab_container}>
        <div>
          <LinkTag data={featureTags} />
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
