import React from "react";
import styles from "./css/usercard.module.css";
import cardImg from "../../../../../public/web-static-img/blog sample image.png";
import Image from "next/image";
import Link from "next/link";
import UserCardFooter from "./UserCardFooter";
export default function UserCard() {
  return (
    <div className={styles.main_container}>
      <div className={styles.card_body}>
        <div className={styles.card_image_wrapper}>
          <Image src={cardImg} alt="card-image" className={styles.img_style} />
        </div>
        <div className={styles.content_wrapper}>
          <h2>
            My Personal Take on Illinoise: A Thrilling, Queer Broadway Show
          </h2>
        </div>
      </div>
      <div>
        <UserCardFooter />
      </div>
    </div>
  );
}
