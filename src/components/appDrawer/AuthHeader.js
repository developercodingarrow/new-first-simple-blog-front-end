import React from "react";
import styles from "./appDrawer.module.css";
import profileImg from "../../../public/web-static-img/profile-imag.jpg";
import Image from "next/image";
export default function AuthHeader() {
  return (
    <div className={styles.authHeader_container}>
      <div className={styles.authHeader_innerContainer}>
        <div className={styles.user_img}>
          <Image
            src={profileImg}
            width={500}
            height={500}
            className={styles.img_style}
          />
        </div>
        <div className={styles.authUser_details}>
          <div>
            <h2 className={styles.authUser_name}>pawan</h2>
          </div>
          <div>
            <span> pawan@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
