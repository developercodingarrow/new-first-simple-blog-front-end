"use client";
import React, { useContext } from "react";
import styles from "./profileheader.module.css";
import Image from "next/image";

export default function ProfileHeader({ userData }) {
  return (
    <div className={styles.profile_header}>
      <div className={styles.user_image_wrapper}>
        <Image
          src={`usersProfileImg/${userData?.userImg?.url}`}
          alt={userData?.userImg?.altText}
          width={500}
          height={500}
          className={styles.img_style}
        />
      </div>
      <div className={styles.user_name_wrapper}>
        <h2>{userData?.name}</h2>
        <div className="small_text_wrapper">@{userData?.userName}</div>
      </div>
    </div>
  );
}
