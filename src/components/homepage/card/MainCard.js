import React from "react";
import styles from "./css/maincard.module.css";
import cardImg from "../../../../public/web-static-img/blog sample image.png";
import Image from "next/image";
import Link from "next/link";
import ProfileElement from "@/src/_components/ssrComponents/profile-element/ProfileElement";
import ActionDotWrapper from "../../server-components/cards/ActionDotWrapper";
import LikeActionWrapper from "../../server-components/cards/LikeActionWrapper";

export default function MainCard(props) {
  const { data } = props;
  console.log("card--", data.blogThumblin);
  return (
    <div className={styles.card}>
      <div className={styles.cardTopBar}>
        <ProfileElement
          text={data.user.name}
          smallText={data.updatedAt}
          imgDirectory="usersProfileImg"
          imgUrl={data.user.userImg.url}
          imgAlt={data.user.userImg.altText}
        />
        <div className={`flex_center_wrapper`}>
          <ActionDotWrapper elementID={data._id} />
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={`neutral_text_color mg_bootom`}>
          <h2>{data.blogTitle} </h2>
        </div>
        <div className={styles.content_wrapper}>
          {data.blogThumblin.url ? (
            <div className={styles.cardImage}>
              <Image
                src={`/blogthumblin/${data.blogThumblin.url}`}
                alt={data.blogThumblin.altText}
                width={500}
                height={500}
                className={`img_style`}
              />
            </div>
          ) : (
            <div className={styles.cardImage}>
              <Image
                src={cardImg}
                alt="Square Image"
                width={500}
                height={500}
                className={`img_style`}
              />
            </div>
          )}

          <div className={`${styles.metaDescription} `}>
            <h3 className="lh">{data.metaDescription}</h3>
          </div>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.likeSection}>
          {/* <i className={styles.heartIcon}>❤️</i> */}
          <LikeActionWrapper postLikes={data.likes} elementID={data._id} />
          {/* <span className={styles.likeCount}>123</span> */}
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
