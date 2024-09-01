import React from "react";
import styles from "./css/testCard.module.css";
import autherImg from "../../../../public/web-static-img/auther-image.jpg";
import cardImg from "../../../../public/web-static-img/blog sample image.png";
import { HiOutlineDotsVertical } from "../../ApplicationIcons";
import Image from "next/image";
import Link from "next/link";
import ActionDotWrapper from "./ActionDotWrapper";
import LikeActionWrapper from "./LikeActionWrapper";
import ProfileElement from "@/src/_components/ssrComponents/profile-element/ProfileElement";
export default function TestCard(props) {
  const { data } = props;
  console.log(data.user);
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
          <div className={styles.cardImage}>
            <Image
              src={cardImg}
              alt="Square Image"
              width={500}
              height={500}
              className={`img_style`}
            />
          </div>
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
