"use client";
import React from "react";
import Image from "next/image";
import styles from "./css/tableuseAvator.module.css";
import userImg from "../../../../../../public/web-static-img/auther-image.jpg";

export default function TableUserAvatar(props) {
  const { name, userName, imgData } = props;

  return (
    <div className={styles.flex_container}>
      <div className={styles.circle_img_wrapper}>
        {imgData.url && (
          <Image
            src={`/usersProfileImg/${imgData.url}`}
            alt={imgData.altText}
            width={500}
            height={500}
            className="circle_img_style"
          />
        )}

        {!imgData.url && (
          <Image
            src={userImg}
            alt="user-image"
            width={500}
            height={500}
            className="circle_img_style"
          />
        )}
      </div>
      <div className={styles.details_wrapper}>
        <div className={`dark_text_color small_text`}>{name}</div>
        <div className={`neutral_text_color min_text`}>{userName}</div>
      </div>
    </div>
  );
}
