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
  SlUser,
  BiTag,
  HiMagnifyingGlass,
  GiPowerButton,
} from "../../ApplicationIcons";
import Link from "next/link";
import { ModelsContext } from "@/src/app/_contextApi/ModelContextApi";
import { AuthContext } from "@/src/app/_contextApi/authContext";
import NavApiActionIcon from "../../client-components/navbar/NavApiActionIcon";

export default function Footer() {
  const {
    searchModel,
    setsearchModel,
    handelOpenSearchModel,
    handelCloseSearchModel,
  } = useContext(ModelsContext);
  const { authUser } = useContext(AuthContext);
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
                <Link
                  href={`${el.hrfLink}`}
                  className={styles.footer_link}
                  key={el.id}
                  aria-label={el.name}
                >
                  {el.name}
                </Link>
              );
            })}
          </div>
          <div className={styles.footer_social_media_wrapper}>
            <Link
              href={"/"}
              className={styles.social_media_iconWraper}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
            <Link
              href={"/"}
              className={styles.social_media_iconWraper}
              aria-label="Twitter"
            >
              <FaXTwitter />
            </Link>

            <Link
              href={"/"}
              className={styles.social_media_iconWraper}
              aria-label="Facebook"
            >
              <FaFacebookSquare />
            </Link>
            <Link
              href={"/"}
              className={styles.social_media_iconWraper}
              aria-label="Pinterest"
            >
              <FaPinterest />
            </Link>
            <Link
              href={"/"}
              className={styles.social_media_iconWraper}
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className={styles.dektop_footer_bootom_bar}>
          <div className={styles.bottom_left_side}>
            <div className="small_text_wrapper">©2024 pinbuzzers.com</div>
            {termsLinks.map((el, index) => {
              return (
                <Link
                  href={`${el.hrfLink}`}
                  className="small_text_wrapper"
                  key={el.id}
                  aria-label={el.name}
                >
                  {el.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.mobile_warpper}>
        <Link
          href={"/"}
          className={styles.mobile_footer_icon_wrapper}
          aria-label="Home"
        >
          <HiOutlineHome />
        </Link>

        <Link href={"/tags"} className={styles.mobile_footer_icon_wrapper}>
          <BiTag />
        </Link>

        {authUser && (
          <div className={styles.mobile_footer_icon_wrapper}>
            <NavApiActionIcon />
          </div>
        )}

        <div
          className={styles.mobile_footer_icon_wrapper}
          onClick={handelOpenSearchModel}
        >
          <HiMagnifyingGlass />
        </div>

        {authUser ? (
          <Link
            href={"/userdashboard/profile"}
            className={styles.mobile_footer_icon_wrapper}
            aria-label="user Profile"
          >
            <SlUser />
          </Link>
        ) : (
          <Link
            href={"/login"}
            className={styles.mobile_footer_icon_wrapper}
            aria-label="login"
          >
            <GiPowerButton />
          </Link>
        )}
      </div>
    </div>
  );
}
