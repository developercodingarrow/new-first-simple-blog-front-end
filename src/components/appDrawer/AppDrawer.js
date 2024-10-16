"use client";
import React, { useContext, useState } from "react";
import styles from "./appDrawer.module.css";
import AuthHeader from "./AuthHeader";
import HeaderLogin from "./HeaderLogin";
import Link from "next/link";
import {
  HiOutlineHome,
  BiTag,
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
} from "../ApplicationIcons";
import { AppContext } from "@/src/app/_contextApi/AppContext";

export default function AppDrawer() {
  const [isAuth, setisAuth] = useState(true);
  const { isMobleDrawer, handelCloseMobileDrawer } = useContext(AppContext);

  const sidebarItems = [
    {
      href: "/home",
      text: "Home",
      icon: <HiOutlineHome />,
    },

    {
      href: "/blogs",
      text: "Blogs ",
      icon: <BiTag />,
    },
    {
      href: " /tags",
      text: "Tags ",
      icon: <HiOutlineHome />,
    },

    // Add more items as needed
  ];

  const sidebarAuthItems = [
    {
      href: "/home",
      text: "DashBord",
      icon: <HiOutlineHome />,
    },

    {
      href: "/blogs",
      text: "Create Blog ",
      icon: <BiTag />,
    },
    {
      href: " /tags",
      text: "Tags ",
      icon: <HiOutlineHome />,
    },

    // Add more items as needed
  ];

  const officalLinks = [
    {
      href: "/",
      text: "Terms & condtion",
    },
    {
      href: "/",
      text: "Privaecy policy",
    },
    {
      href: "/",
      text: "contact us",
    },
  ];

  return (
    <>
      <div
        className={`${styles.container} ${
          isMobleDrawer ? styles.show : ""
        }`} /* Here you toggle the 'show' class */
        onClick={handelCloseMobileDrawer}
      >
        <div className={styles.inner_container}>
          <div className={styles.appDrawer_header}>
            <div className={styles.auth_header_wrapper}>
              {isAuth ? <AuthHeader /> : <HeaderLogin />}
            </div>
          </div>
          <div className={styles.appDrawer_option_wrapper}>
            {" "}
            {sidebarItems.map((item, index) => {
              return (
                <div className={styles.sideBar_itemsBox}>
                  <Link href={item.href} className={styles.items_link_wrapper}>
                    <span className={styles.item_iconBox}>{item.icon}</span>
                    <span className={`${styles.item_textBox} `}>
                      {item.text}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>

          {isAuth && (
            <div className={styles.appDrawer_authoption_wrapper}>
              {" "}
              {sidebarAuthItems.map((item, index) => {
                return (
                  <div className={styles.sideBar_itemsBox}>
                    <Link
                      href={item.href}
                      className={styles.items_link_wrapper}
                    >
                      <span className={styles.item_iconBox}>{item.icon}</span>
                      <span className={`${styles.item_textBox} `}>
                        {item.text}
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}

          <div className={styles.inner_container_footer}>
            <div className={styles.social_media_wrapper}>
              <div className={styles.social_mediaHeading}>
                <h2>Follow</h2>
              </div>
              <div className={styles.social_media_links}>
                <Link href={"/"} className={styles.social_media_iconWrapper}>
                  <FaFacebookSquare />
                </Link>
                <Link href={"/"} className={styles.social_media_iconWrapper}>
                  <FaInstagram />
                </Link>

                <Link href={"/"} className={styles.social_media_iconWrapper}>
                  <FaLinkedin />
                </Link>
              </div>
            </div>
            <div className={styles.offical_links_wrapper}>
              {officalLinks.map((el, index) => {
                return (
                  <Link href={"/"} className={styles.min_linkText}>
                    {el.text}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
