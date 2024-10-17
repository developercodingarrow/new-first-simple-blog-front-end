import React from "react";
import styles from "./css/userDashBordCard.module.css";
import cardImg from "../../../../../public/web-static-img/no-image-available.webp";
import Image from "next/image";
import UserCardFooter from "./UserCardFooter";

export default function UserDashBordCard(props) {
  const { footerActions, data } = props;
  const truncatedData =
    data.blogTitle.length > 70
      ? `${data.blogTitle.slice(0, 60)}...`
      : data.blogTitle;
  return (
    <div className={styles.main_container}>
      <div className={styles.card_body}>
        <div className={styles.card_image_wrapper}>
          {data.blogThumblin.url ? (
            <div className={styles.cardImage}>
              <Image
                src={`/blogthumblin/${data.blogThumblin.url}`}
                alt={data.blogThumblin.altText}
                width={900}
                height={900}
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
        </div>
        <div className={styles.content_wrapper}>
          <h2>{truncatedData}</h2>
        </div>
      </div>
      <div>
        <UserCardFooter
          footerActions={footerActions}
          actionId={data._id}
          slug={data.slug}
        />
      </div>
    </div>
  );
}
