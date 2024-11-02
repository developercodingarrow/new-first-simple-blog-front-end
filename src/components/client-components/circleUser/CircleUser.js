"use client";
import React, { useContext, useState } from "react";
import styles from "./css/circleUser.module.css";
import { SlUser } from "../../ApplicationIcons";
import LinkBtn from "../../server-components/serverElements/LinkBtn";
import UserDrawer from "../../authComponents/userDrawer/UserDrawer";
import { ModelsContext } from "@/src/app/_contextApi/ModelContextApi";
import Image from "next/image";
import myImageLoader from "@/src/app/utils/imageLoader";
import placeholderSrc from "../../../../public/usersProfileImg/profile-pic.webp";

export default function CircleUser(props) {
  const { userData } = props;
  const { isUserDrawer, handelOpenUserDrawer } = useContext(ModelsContext);
  const timestamp = new Date().getTime(); // Cache-busting parameter

  // Using the URL from userData directly
  const userImgSrc =
    userData?.userImg?.url || "/usersProfileImg/profile-pic.webp"; // Fallback to default image if userImg is not available

  return (
    <div className={styles.com_container}>
      <div className={styles.inner_container}>
        {userData ? (
          <div className="large_iconWrapper" onClick={handelOpenUserDrawer}>
            <div className={styles.user_avatar}>
              <Image
                src={userImgSrc}
                alt={userData?.userImg?.altText || "User Profile"}
                width={100}
                height={100}
                className={styles.img_style}
                loader={myImageLoader} // Use your custom image loader
                placeholder="blur" // Use blur placeholder for loading
                blurDataURL={placeholderSrc.src} // Placeholder blur image
              />
            </div>

            <div className={styles.user_drawer_Wrapper}>
              {isUserDrawer && <UserDrawer />}
            </div>
          </div>
        ) : (
          <div>
            <LinkBtn
              linkText="login"
              btnSize="larg_Link_Btn"
              hrfLink="/login"
            />
          </div>
        )}
      </div>
    </div>
  );
}
