"use client";
import React, { useContext, useState, useEffect, useRef } from "react";
import styles from "./homepageLayout.module.css";
import LayoutSideBar from "../../client-components/sideBar/LayoutSideBar";
import TagTab from "../../client-components/tab/TagTab";

export default function HomePageLayout({ children, featureTags }) {
  return (
    <div className={styles.layout_wrapper}>
      <div className={styles.content_side}>
        <div className={styles.sticky_tab_wrapper}>
          <TagTab tabData={featureTags} redirectType="query" />
        </div>
        {children}
      </div>
      <div className={styles.layout_side_bar}>
        <LayoutSideBar featureTag={featureTags} />
      </div>
    </div>
  );
}
