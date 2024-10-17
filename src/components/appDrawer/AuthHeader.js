import React from "react";
import styles from "./appDrawer.module.css";
import profileImg from "../../../public/web-static-img/profile-imag.jpg";
import Image from "next/image";
export default function AuthHeader(props) {
  const { authUserDetail } = props;

  const userImgSrc = authUserDetail?.userImg?.url?.startsWith("http")
    ? authUserDetail.userImg.url // Google profile image
    : `/usersProfileImg/${authUserDetail?.userImg?.url || "profile-pic.webp"}`;
  return (
    <div className={styles.authHeader_container}>
      <div className={styles.authHeader_innerContainer}>
        <div className={styles.user_img}>
          <Image
            src={userImgSrc}
            alt={authUserDetail?.userImg?.altText || "Profile Picture"}
            width={500}
            height={500}
            className={styles.img_style}
          />
        </div>
        <div className={styles.authUser_details}>
          <div>
            <h2 className={styles.authUser_name}> {authUserDetail?.name} </h2>
          </div>
          <div>
            <span> {authUserDetail?.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
