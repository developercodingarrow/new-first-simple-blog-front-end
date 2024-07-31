"use client";
import React, { useContext, useEffect, useRef } from "react";
import styles from "./css/userDrawer.module.css";
import Link from "next/link";
import { SlUser, TiDocumentText, FaPlus } from "../../ApplicationIcons";
import { AppContext } from "@/src/contextApi/AppcontextApi";

export default function UserDrawer() {
  const { isUserDrawer, handelCloseUserDrawer } = useContext(AppContext);
  const drawerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        handelCloseUserDrawer();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerRef, handelCloseUserDrawer]);

  return (
    <div ref={drawerRef} className={styles.drawer_container}>
      <ul className={styles.inner_container}>
        <li>
          <Link href={"/"} className={styles.text_icon_link}>
            <div className="medium_icon_wrapper">
              <SlUser />
            </div>
            <div className="medium_text_wrapper">view profile</div>
          </Link>
        </li>

        <li>
          <Link href={"/"} className={styles.text_icon_link}>
            <div className="medium_icon_wrapper">
              <FaPlus />
            </div>
            <div className="medium_text_wrapper">Create Blog</div>
          </Link>
        </li>

        <li>
          <Link href={"/"} className={styles.text_icon_link}>
            <div className="medium_icon_wrapper">
              <TiDocumentText />
            </div>
            <div className="medium_text_wrapper">Your Blogs</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
