"use client";
import React, { useContext } from "react";
import styles from "./css/userDashbordheader.module.css";
import Image from "next/image";
import { AuthContext } from "@/src/app/_contextApi/authContext";
import myImageLoader from "@/src/app/utils/imageLoader";

export default function UserDashBordHeader() {
  const { authUser } = useContext(AuthContext);
  const timestamp = new Date().getTime(); // Cache-busting parameter
  const userImgSrc = authUser?.userImg?.url?.startsWith("http")
  ? `${authUser.userImg.url}?t=${timestamp}` // Google profile image with cache-busting
  : `/usersProfileImg/${authUser?.userImg?.url || "profile-pic.webp"}?t=${timestamp}`; // Local image with cache-busting

  return (
    <div className={styles.profile_header}>
      <div className={styles.user_image_wrapper}>
        <Image
          loader={myImageLoader} // Add custom loader for external images
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
