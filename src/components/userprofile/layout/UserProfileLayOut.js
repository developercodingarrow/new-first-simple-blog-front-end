import React from "react";
import styles from "./css/userprofileLayout.module.css";
import ProfileHeader from "../profileHeader/ProfileHeader";
import { userProfileTab } from "@/src/jsonData/navigationData";
import TagTab from "../../client-components/tab/TagTab";
import sidebanner from "../../../../public/web-static-img/side-banner-img.jpg";
import Image from "next/image";

export default function UserProfileLayOut({ children, userData }) {
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className={styles.content_side}>
          <section className={styles.header_wapper}>
            <ProfileHeader userData={userData} />
          </section>

          <div className={styles.sticky_tab_wrapper}>
            {" "}
            <TagTab redirectType="userprofile" />
          </div>
          <div className={styles.tab_content_wrapper}> {children}</div>
        </div>
        <div className={styles.side_bar_container}>
          <div className={styles.side_banner_wrapper}>
            <Image
              src={sidebanner}
              width={500}
              height={500}
              className={styles.img_style}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
