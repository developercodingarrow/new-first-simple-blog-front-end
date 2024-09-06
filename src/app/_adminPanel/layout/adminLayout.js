"use client";
import React, { useState } from "react";
import styles from "./css/adminlayout.module.css";
import { CiMenuFries } from "../ApplicationIcons";
import Link from "next/link";
import AsideBar from "./asideBar";

export default function AdminLayout({ children }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className={styles.main_container}>
      {/* sidebar start */}
      <div
        className={`${styles.sidebar} ${
          isSidebarCollapsed ? styles.sidebar_collapsed : ""
        }`}
      >
        <div className={styles.sideBar_header}>
          <div
            className={`${styles.logo_wrapper} ${
              isSidebarCollapsed ? styles.logo_hidden : ""
            }`}
          >
            Admin Dashbord
          </div>
          <div onClick={toggleSidebar} className={styles.hanbug_wrapper}>
            <CiMenuFries />
          </div>
        </div>

        <div className={styles.sideBar_option_container}>
          <AsideBar isSidebarCollapsed={isSidebarCollapsed} />
        </div>
        {/* side bar end */}
      </div>
      <div
        className={`${styles.right_container} ${
          isSidebarCollapsed ? styles.right_container_expanded : ""
        }`}
      >
        <div
          className={`${styles.top_navbar} ${
            isSidebarCollapsed ? styles.top_navbar_expanded : ""
          }`}
        >
          {/* Top Navbar content here */}
        </div>
        <div className={styles.content_container}>{children}</div>
      </div>
    </div>
  );
}
