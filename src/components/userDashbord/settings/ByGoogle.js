import React from "react";
import styles from "./css/updatePassword.module.css";
import googleIconImg from "../../../../public/web-static-img/google-icon.png";
import Image from "next/image";
export default function ByGoogle() {
  return (
    <div className={styles.google_auth_view_container}>
      <div className={styles.google_view}>
        <div className={styles.google_img_wrapper}>
          <Image
            src={googleIconImg}
            alt="google-image-icon"
            width={200}
            height={200}
            className={styles.img_style}
          />
        </div>
        <div className={styles.google_infoText}>
          <h3>you are authinticated by google </h3>{" "}
        </div>
      </div>

      <div className={styles.google_auth_info}>
        <div className="medium_text_wrapper">
          you are Register by google authintication for login user your google
          account
        </div>
      </div>
    </div>
  );
}
