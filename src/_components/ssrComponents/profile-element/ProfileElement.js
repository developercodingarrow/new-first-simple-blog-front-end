import React from "react";
import styles from "./css/profileelement.module.css";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/src/_logicalFunctions/formatDate";
import placeholderSrc from "../../../../public/usersProfileImg/profile-pic.webp";
import myImageLoader from "@/src/app/utils/imageLoader";

export default function ProfileElement(props) {
  const { text, smallText, imgDirectory, imgUrl, imgAlt } = props;
  const date = formatDate(smallText);
  // Determine image source
  const profileImgSrc = imgUrl.startsWith("http")
    ? imgUrl // Use the external image URL
    : `/${imgDirectory}/${imgUrl || "profile-pic.webp"}`; // Fallback to local image path

  return (
    <div className={styles.flex_container}>
      <div className={styles.circle_img_wrapper}>
        <Image
          src={profileImgSrc} // Use determined image source
          alt={imgAlt || "Default Profile Image"}
          width={500}
          height={500}
          className={styles.circle_img_style}
          loader={myImageLoader} // Use your custom image loader
          placeholder="blur" // Use blur placeholder for loading
          blurDataURL={placeholderSrc.src} // Placeholder blur image
        />
      </div>
      <div className={styles.details_wrapper}>
        <div className={`dark_text_color small_text_bold`}>{text}</div>
        <div className={`neutral_text_color min_text`}>{date}</div>
      </div>
    </div>
  );
}
