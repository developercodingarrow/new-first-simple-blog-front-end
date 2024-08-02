"use client";
import React, { useEffect, useState } from "react";
import styles from "./css/layoutsidebar.module.css";
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
      <p>Layout side bars</p>
    </div>
  );
}
