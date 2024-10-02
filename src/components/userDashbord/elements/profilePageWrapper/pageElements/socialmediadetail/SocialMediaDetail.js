"use client";
import React, { useEffect } from "react";
import styles from "./css/socialmediadetails.module.css";
import Link from "next/link";
import {
  FaInstagram,
  FaPinterest,
  FaFacebookSquare,
  FaLinkedin,
  FaXTwitter,
} from "../../../../../ApplicationIcons";
export default function SocialMediaDetail(props) {
  const {
    title,
    textdata,
    apiData,
    modelTitle,
    modelInputs,
    openModal,
    modelActionHandler,
  } = props;

  const handleOpen = () => {
    openModal(
      apiData,
      apiData._id,
      modelTitle,
      modelInputs,
      modelActionHandler
    );
  };

  const getSocialMediaIcon = (title) => {
    switch (title.toLowerCase()) {
      case "twitter":
        return <FaXTwitter />;
      case "facebook":
        return <FaFacebookSquare />;
      case "instagram":
        return <FaInstagram />;
      case "linkedin":
        return <FaLinkedin />;
      case "pinterest":
        return <FaPinterest />;
      default:
        return null; // If no matching title, return null
    }
  };

  return (
    <div className={styles.flex_container}>
      <div className={styles.title_wrapper}>
        <h5 className="capitalize_text"> {title}</h5>
      </div>
      <div className={styles.text_data_wrapper} onClick={handleOpen}>
        {textdata === undefined || textdata === null || textdata === "" ? (
          <>
            {" "}
            <span className={styles.text_style}>
              Update Your Social Profile{" "}
            </span>{" "}
          </>
        ) : (
          <>
            <div className={styles.socila_media_iconStyle}>
              {getSocialMediaIcon(title)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
