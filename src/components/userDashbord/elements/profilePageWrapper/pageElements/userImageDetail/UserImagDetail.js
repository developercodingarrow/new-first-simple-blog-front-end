import React from "react";
import styles from "./css/userImagedetail.module.css";
import Image from "next/image";

export default function UserImagDetail(props) {
  const { title, apiData, openModal } = props;

  const handelOpenModel = () => {
    openModal(apiData?.userImg?.url, apiData._id);
  };

  const userImgSrc = apiData?.userImg?.url?.startsWith("http")
    ? apiData.userImg.url // Google profile image
    : `/usersProfileImg/${apiData?.userImg?.url || "profile-pic.webp"}`;

  return (
    <div className={styles.flex_container}>
      <div className={styles.title_wrapper}>
        <h5 className="capitalize_text"> {title}</h5>
      </div>
      <div className={styles.small_img_wrapper} onClick={handelOpenModel}>
        <Image
          src={userImgSrc}
          alt={apiData?.userImg?.altText || "Profile Picture"}
          className={styles.img_style}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
