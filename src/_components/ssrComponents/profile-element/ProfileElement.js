import React from "react";
import styles from "./css/profileelement.module.css";
import Image from "next/image";
import Link from "next/link";
import autherImg from "../../../../public/web-static-img/auther-image.jpg";
import { formatDate } from "@/src/_logicalFunctions/formatDate";

export default function ProfileElement(props) {
  const { text, smallText, imgDirectory, imgUrl, imgAlt } = props;
  const date = formatDate(smallText);
  return (
    <div className={styles.flex_container}>
      <div className={styles.circle_img_wrapper}>
        <Image
          src={`/${imgDirectory}/${imgUrl}`}
          alt={imgAlt}
          width={500}
          height={500}
          className="circle_img_style"
        />
      </div>
      <div className={styles.details_wrapper}>
        <div className={`dark_text_color small_text`}>{text}</div>
        <div className={`neutral_text_color min_text`}>{date}</div>
      </div>
    </div>
  );
}
