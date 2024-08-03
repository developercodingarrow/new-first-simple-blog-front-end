import React from "react";
import styles from "./css/landscapecard.module.css";
import autherImg from "../../../../public/web-static-img/auther-image.jpg";
import cardImg from "../../../../public/web-static-img/blog sample image.png";
import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineDotsVertical,
  IoArrowForwardCircleOutline,
} from "../../ApplicationIcons";
import CardFooter from "./CardFooter";

export default function LandscapeCard() {
  return (
    <div className={styles.com_container}>
      <div className={styles.card_container}>
        <Link href={"/"} className={styles.auther_container}>
          <div className={styles.min_image_wrapper}>
            <Image
              src={autherImg}
              width={500}
              className={styles.min_autherImg}
            />
          </div>
          <div className={styles.auther_name_wrapper}>
            <span className="small_text_wrapper">Roman Newell</span>
          </div>
        </Link>
      </div>
      <div className={styles.dekstop_card}>
        <div className={styles.dekstop_card_body}>
          <div className={styles.dekstop_card_img_wrapper}>
            <Image
              src={cardImg}
              alt="card-image"
              width={500}
              height={500}
              className={styles.dekstop_card_Img}
            />
          </div>
          <div className={styles.dekstop_card_containt}>
            <div className={styles.dekstop_card_title}>
              <h2>
                My Personal Take on Illinoise: A Thrilling, Queer Broadway Show
              </h2>
            </div>
            <div className={styles.dekstop_card_meta_decreption_wrapper}>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                malesuada erat eu lorem laoreet, a dapibus nulla imperdiet.
                Integer a lacinia dolor, ut porttitor.
              </h3>
            </div>
            <div className={styles.dekstop_card_action_wrapper}>
              <CardFooter />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobile_card}>
        <div className={styles.mobile_card_title}>
          <h2>
            {" "}
            My Personal Take on Illinoise: A Thrilling, Queer Broadway Show
          </h2>
        </div>
        <div className={styles.mobile_card_body}>
          <div className={styles.mobile_img_wraper}>
            {" "}
            <Image
              src={cardImg}
              alt="card-image"
              width={100}
              height={100}
              className={styles.mobile_card_Img}
            />
          </div>
          <div className={styles.mobile_meta_wrapper}>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              malesuada erat eu lorem laoreet, a dapibus nulla imperdiet.
              Integer a lacinia dolor, ut porttitor.
            </h3>
          </div>
        </div>
        <div>
          <CardFooter />
        </div>
      </div>
    </div>
  );
}
