import React from "react";
import styles from "./boxcard.module.css";
import dummyImg from "../../../../public/web-static-img/no-image-available.webp";
import Image from "next/image";
import ProfileElement from "@/src/_components/ssrComponents/profile-element/ProfileElement";
import ActionDotWrapper from "../../server-components/cards/ActionDotWrapper";
import LikeActionWrapper from "../../server-components/cards/LikeActionWrapper";
import Link from "next/link";
import { FaRegComment, PiEyeThin } from "../../ApplicationIcons";
export default function BoxCard(props) {
  const { data } = props;

  console.log("tags-page---", data);

  return (
    <div className={styles.card_container}>
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
      <div className={styles.card_image}>
        {data.blogThumblin.url ? (
          <div className={styles.card_image}>
            <Image
              src={`/blogthumblin/${data.blogThumblin.url}`}
              alt={data.blogThumblin.altText}
              width={500}
              height={500}
              className={`img_style`}
            />
          </div>
        ) : (
          <div className={styles.card_image}>
            <Image
              src={dummyImg}
              alt="Square Image"
              width={500}
              height={500}
              className={`img_style`}
            />
          </div>
        )}
      </div>
      <div className={styles.card_body}>
        <div className={styles.card_title_wrapper}>
          <h3>
            {data.blogTitle.length > 20
              ? `${data.blogTitle.slice(0, 55)}...`
              : data.blogTitle}
          </h3>
        </div>
        <div className={styles.card_meta_descreption}>
          <h4 className={`neutral_text_color `}>{data.metaDescription}</h4>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.likeSection}>
          <LikeActionWrapper postLikes={data.likes} elementID={data._id} />
          <div className={styles.comment_statsBox}>
            <div>
              <FaRegComment />
            </div>
            <div>{data.comments.length}</div>
          </div>

          <div className={styles.view_statsBox}>
            <div>
              <PiEyeThin />
            </div>
            <div> {data?.viewCount}</div>
          </div>
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
