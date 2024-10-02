"use client";
import React, { useContext } from "react";
import styles from "./css/footer.module.css";
import FooterLogo from "./FooterLogo";
import { dekstopFooterLinks, termsLinks } from "@/src/jsonData/navigationData";
import {
  FaInstagram,
  FaPinterest,
  FaFacebookSquare,
  FaLinkedin,
  FaXTwitter,
  HiOutlineHome,
  MdOutlineAutoGraph,
  SlUser,
  TiDocumentText,
  BiTag,
} from "../../ApplicationIcons";
import Link from "next/link";
import { ModelsContext } from "@/src/app/_contextApi/ModelContextApi";

export default function Footer() {
  const {
    searchModel,
    setsearchModel,
    handelOpenSearchModel,
    handelCloseSearchModel,
  } = useContext(ModelsContext);
  return (
    <div className={styles.com_conatiner}>
      <div className={styles.dekstop_wrapper}>
        <div className={styles.footer_wrapper}>
          <div className={styles.footer_logo_wrapper}>
            <FooterLogo />
          </div>
          <div className={styles.footer_links_wrapper}>
            {dekstopFooterLinks.map((el, index) => {
              return (
                <Link href={`${el.hrfLink}`} className={styles.footer_link}>
                  {el.name}
                </Link>
              );
            })}
          </div>
          <div className={styles.footer_social_media_wrapper}>
            <Link href={"/"} className={styles.social_media_iconWraper}>
              <FaLinkedin />
            </Link>
            <Link href={"/"} className={styles.social_media_iconWraper}>
              <FaXTwitter />
            </Link>

            <Link href={"/"} className={styles.social_media_iconWraper}>
              <FaFacebookSquare />
            </Link>
            <Link href={"/"} className={styles.social_media_iconWraper}>
              <FaPinterest />
            </Link>
            <Link href={"/"} className={styles.social_media_iconWraper}>
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className={styles.dektop_footer_bootom_bar}>
          <div className={styles.bottom_left_side}>
            <div className="small_text_wrapper">©2024 blogwebsit</div>
            {termsLinks.map((el, index) => {
              return (
                <Link href={"/"} className="small_text_wrapper">
                  {el.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.mobile_warpper}>
        <Link href={"/"} className={styles.mobile_footer_icon_wrapper}>
          <HiOutlineHome />
        </Link>

        <Link href={"/"} className={styles.mobile_footer_icon_wrapper}>
          <MdOutlineAutoGraph />
        </Link>
        <Link
          href={"/"}
          className={styles.mobile_footer_icon_wrapper}
          onClick={handelOpenSearchModel}
        >
          <TiDocumentText />
        </Link>
        <Link href={"/"} className={styles.mobile_footer_icon_wrapper}>
          <BiTag />
        </Link>
        <Link href={"/"} className={styles.mobile_footer_icon_wrapper}>
          <SlUser />
        </Link>
      </div>
    </div>
  );
}
