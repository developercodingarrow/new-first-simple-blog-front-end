"use client";
import React, { useContext } from "react";
import styles from "./css/userDashbordheader.module.css";
import Image from "next/image";
import { AuthContext } from "@/src/app/_contextApi/authContext";

export default function UserDashBordHeader() {
  const { authUser } = useContext(AuthContext);
  const userImgSrc = authUser?.userImg?.url?.startsWith("http")
    ? authUser.userImg.url // Google profile image
    : `/usersProfileImg/${authUser?.userImg?.url || "profile-pic.webp"}`;

  return (
    <div className={styles.profile_header}>
      <div className={styles.user_image_wrapper}>
        <Image
          src={userImgSrc}
          alt={authUser?.userImg?.altText || "Profile Picture"}
          width={500}
          height={500}
          className={styles.img_style}
        />
      </div>
      <div className={styles.user_name_wrapper}>
        <h2>{authUser?.name}</h2>
        <div className="small_text_wrapper">@{authUser?.userName}</div>
      </div>
    </div>
  );
}
