import React from "react";
import styles from "./contactform.module.css";
import {
  IoMail,
  FaFacebookF,
  FaLinkedinIn,
  RiTwitterXLine,
} from "../ApplicationIcons";
export default function ContactDetails() {
  return (
    <div className={styles.detail_container}>
      <div className={styles.section_title}>
        <h3>Mail us </h3>
      </div>
      <div className={styles.mail_section}>
        <div className={styles.icon_wrapper}>
          <IoMail />
        </div>
        <div className={styles.text_wrapper}>info@pinbuzzers.com</div>
      </div>
      <div className={styles.section_title}>
        <h3>Socila Meida </h3>
      </div>
      <div className={styles.social_media_detail}>
        <div className={`${styles.social_icon_Box} ${styles.fb_color}`}>
          <FaFacebookF />
        </div>
        <div className={`${styles.social_icon_Box} ${styles.in_color}`}>
          <FaLinkedinIn />
        </div>
        <div className={`${styles.social_icon_Box} ${styles.twitter_x_color}`}>
          <RiTwitterXLine />
        </div>
      </div>
    </div>
  );
}
