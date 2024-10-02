import React from "react";
import styles from "../page.module.css";
import { profileUserDeatils } from "../../apiactions";
import {
  FaInstagram,
  FaPinterest,
  FaFacebookSquare,
  FaLinkedin,
  FaXTwitter,
} from "../../../../../src/components/ApplicationIcons";
import Link from "next/link";

async function getData(slug) {
  try {
    const res = await profileUserDeatils(slug);
    if (res.status === "success") {
      return await res.result;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    // throw new Error(`Failed to fetch data: ${error}`);
  }
}

export default async function UserProfilePage(pathname) {
  const slug = pathname.params?.slug;
  const initialData = await getData(slug);
  console.log(initialData);
  return (
    <div>
      <div className={styles.about_header}>
        Litvers member since -
        {initialData?.createdAt
          ? new Date(initialData.createdAt).toLocaleDateString()
          : "unknown"}{" "}
      </div>
      <div className={styles.about_user}>{initialData?.bio}</div>
      <div className={styles.profile_footer}>
        <div>{initialData?.businessWebsite}</div>
        <div className={styles.socila_media_icon_wrappers}>
          {initialData?.instagram && (
            <Link href={"/"} className={styles.socila_media_iconStyle}>
              <FaInstagram />
            </Link>
          )}
          {initialData?.Pinterest && (
            <Link href={"/"} className={styles.socila_media_iconStyle}>
              <FaPinterest />
            </Link>
          )}

          {initialData?.facebook && (
            <Link href={"/"} className={styles.socila_media_iconStyle}>
              <FaFacebookSquare />
            </Link>
          )}

          {initialData?.LinkedIn && (
            <Link href={"/"} className={styles.socila_media_iconStyle}>
              <FaLinkedin />
            </Link>
          )}

          {initialData?.twitter && (
            <Link href={"/"} className={styles.socila_media_iconStyle}>
              <FaXTwitter />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
