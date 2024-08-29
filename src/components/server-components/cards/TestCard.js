import React from "react";
import styles from "./css/testCard.module.css";
import autherImg from "../../../../public/web-static-img/auther-image.jpg";
import cardImg from "../../../../public/web-static-img/blog sample image.png";
import Image from "next/image";
import Link from "next/link";
export default function TestCard(props) {
  const { data } = props;
  return (
    <div className={styles.card}>
      <div className={styles.cardTopBar}>
        <div className={styles.cardUserInfo}>
          <Image
            src={autherImg}
            alt="User Image"
            className={styles.userImage}
          />
          <div className={styles.userDetails}>
            <div className={styles.username}>John Doe</div>
            <div className={styles.date}>August 29, 2024</div>
          </div>
        </div>
        <div className={styles.moreOptions}>
          <i className={styles.threeDotsIcon}>⋯</i>
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>
          <h2>The One Thing Narcissists Always Punish Supply For </h2>
        </div>
        <div className={styles.content_wrapper}>
          <div className={styles.cardImage}>
            <Image
              src={cardImg}
              alt="Square Image"
              width={500}
              height={500}
              className={styles.img_style}
            />
          </div>
          <div className={styles.metaDescription}>
            <h3>
              This is a meta description that explains the content of the card.
              It is limited to 150 characters and is split into 2 or 3 lines
              split into 2 or 3 lines..
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.likeSection}>
          <i className={styles.heartIcon}>❤️</i>
          <span className={styles.likeCount}>123</span>
        </div>
        <div className={styles.arrowSection}>
          <Link href={`/blog/${data.slug}`} className={styles.arrowIcon}>
            ➡
          </Link>
        </div>
      </div>
    </div>
  );
}
