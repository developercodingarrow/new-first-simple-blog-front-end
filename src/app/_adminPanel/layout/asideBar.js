"use client";
import React, { useState } from "react";
import styles from "./css/adminlayout.module.css";
import {
  CiMenuFries,
  LuLayoutDashboard,
  PiUsersThreeLight,
  BsCardList,
  GoTag,
  CiImageOn,
  MdOutlineContactMail,
} from "../ApplicationIcons";
import Link from "next/link";

const sidebarItems = [
  {
    href: "/admindashboard/",
    text: "Dashboard",
    icon: <LuLayoutDashboard />,
  },
  {
    href: "/admindashboard/users",
    text: "New Users",
    icon: <PiUsersThreeLight />,
  },
  {
    href: "/admindashboard/blogs",
    text: "Blogs List",
    icon: <BsCardList />,
  },
  {
    href: " /admindashboard/tags",
    text: "Tags List",
    icon: <GoTag />,
  },
  {
    href: "/admindashboard/admin-tags",
    text: "Admin Tags List",
    icon: <GoTag />,
  },
  {
    href: "/admindashboard/main-banner",
    text: "Main Banner",
    icon: <CiImageOn />,
  },

  {
    href: "/admindashboard/contact-enquiries",
    text: "Enquire Contact",
    icon: <MdOutlineContactMail />,
  },
  {
    href: "/admindashboard/side-banner",
    text: "Side banner",
    icon: <CiImageOn />,
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
