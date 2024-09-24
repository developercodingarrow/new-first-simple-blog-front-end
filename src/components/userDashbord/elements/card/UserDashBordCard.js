import React from "react";
import styles from "./css/userDashBordCard.module.css";
import cardImg from "../../../../../public/web-static-img/blog sample image.png";
import Image from "next/image";
import UserCardFooter from "./UserCardFooter";

export default function UserDashBordCard(props) {
  const { footerActions, data } = props;
  return (
    <div className={styles.main_container}>
      <div className={styles.card_body}>
        <div className={styles.card_image_wrapper}>
          <Image src={cardImg} alt="card-image" className={styles.img_style} />
        </div>
        <div className={styles.content_wrapper}>
          <h2>{data.blogTitle}</h2>
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
