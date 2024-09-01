"use client";
import React, { useContext } from "react";
import styles from "./css/userpanel.module.css";
import userImg from "../../../../public/web-static-img/auther-image.jpg";
import Image from "next/image";
import { userDashBordTab } from "@/src/jsonData/navigationData";
import TagTab from "@/src/components/client-components/tab/TagTab";
import UserDetailWrapper from "./userdetails/usertextdetail/UserDetailWrapper";
import UserLayoutSideBar from "./UserLayoutSideBar";
import { AppContext } from "@/src/contextApi/AppcontextApi";

export default function UserPanelLayout({ children }) {
  const { isLogined } = useContext(AppContext);
  console.log(isLogined);
  // usersProfileImg userImg url altText
  return (
    <div>
      <div className={styles.main_container}>
        <div className={styles.inner_container}>
          <div className={styles.content_side}>
            <div className={styles.profile_header}>
              <div className={styles.user_image_wrapper}>
                <Image
                  src={`/usersProfileImg/${isLogined?.userImg?.url}`}
                  alt={isLogined?.userImg?.altText}
                  width={500}
                  height={500}
                  className={styles.img_style}
                />
              </div>
              <div className={styles.user_name_wrapper}>
                <h2>{isLogined?.name}</h2>
                <div className="small_text_wrapper">@{isLogined?.userName}</div>
              </div>
            </div>

            <div className={styles.sticky_tab_wrapper}>
              <TagTab tabData={userDashBordTab} redirectType="page" />
            </div>
            <div className={styles.tab_content_wrapper}>{children}</div>
          </div>

          <div className={styles.side_bar_container}>
            <UserLayoutSideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
