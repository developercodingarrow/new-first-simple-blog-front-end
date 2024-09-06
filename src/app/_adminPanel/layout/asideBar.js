"use client";
import React, { useState } from "react";
import styles from "./css/adminlayout.module.css";
import {
  CiMenuFries,
  LuLayoutDashboard,
  PiUsersThreeLight,
  BsCardList,
  GoTag,
} from "../ApplicationIcons";
import Link from "next/link";

const sidebarItems = [
  {
    href: "/",
    text: "Dashboard",
    icon: <LuLayoutDashboard />,
  },
  {
    href: "users",
    text: "New Users",
    icon: <PiUsersThreeLight />,
  },
  {
    href: "blogs",
    text: "Blogs List",
    icon: <BsCardList />,
  },
  {
    href: "tags",
    text: "Tags List",
    icon: <GoTag />,
  },
  {
    href: "admin-tags",
    text: "Admin Tags List",
    icon: <GoTag />,
  },
  // Add more items as needed
];

export default function AsideBar(props) {
  const { isSidebarCollapsed } = props;

  return (
    <div className={styles.option_inner_container}>
      {sidebarItems.map((item, index) => {
        return (
          <div className={styles.sideBar_itemsBox}>
            <Link href={item.href} className={styles.items_link_wrapper}>
              <span className={styles.item_iconBox}>{item.icon}</span>
              <span
                className={`${styles.item_textBox} ${
                  isSidebarCollapsed ? styles.text_hidden : ""
                }`}
              >
                {item.text}
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
