"use client";
import React from "react";
import styles from "./css/userDetailui.module.css";
import userImg from "../../../../../public/web-static-img/auther-image.jpg";
import Image from "next/image";
import {
  CiHashtag,
  CiCalendar,
  CiMail,
  SlSocialFacebook,
  SlSocialLinkedin,
  RiTwitterXLine,
} from "../../ApplicationIcons";
export default function UserDetailUi() {
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_flex_container}>
        <div className={styles.profile_container}>
          <div className={styles.profile_card_heading}>
            <h5>profile</h5>
          </div>
          <div className={styles.profile_card}>
            <div className={styles.profile_img}>
              <Image
                src={userImg}
                className={styles.img_style}
                width={500}
                height={500}
              />
            </div>
            <div className={styles.user_name}>Jimmy Turner</div>
            <div className={styles.details_list_wrapper}>
              <div className={styles.detail_item}>
                <div className={styles.iconBox}>
                  <CiHashtag />{" "}
                </div>
                <div className={styles.user_nameText}>@username</div>
              </div>
              <div className={styles.detail_item}>
                <div className={styles.iconBox}>
                  <CiCalendar />{" "}
                </div>
                <div className={styles.user_nameText}>Jan 20, 1989</div>
              </div>

              <div className={styles.detail_item}>
                <div className={styles.iconBox}>
                  <CiMail />{" "}
                </div>
                <div className={styles.user_nameText}>jimmy@gmail.com</div>
              </div>
            </div>
          </div>
          <div className={styles.card_footer}>
            <div className={styles.social_icon_wrapper}>
              <SlSocialFacebook />
            </div>
            <div className={styles.social_icon_wrapper}>
              <SlSocialLinkedin />{" "}
            </div>
            <div className={styles.social_icon_wrapper}>
              <RiTwitterXLine />
            </div>
          </div>
        </div>
        <div>table</div>
      </div>
    </div>
  );
}
