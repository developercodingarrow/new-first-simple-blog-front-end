import React from "react";
import styles from "./css/landscapecard.module.css";
import autherImg from "../../../../public/web-static-img/auther-image.jpg";
import cardImg from "../../../../public/web-static-img/blog sample image.png";
import Image from "next/image";
import Link from "next/link";
import CardFooter from "./CardFooter";

export default function LandscapeCard(props) {
  const { data } = props;

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
              src={`/blogthumblin/${data?.blogThumblin?.url}`}
              alt={`${data.blogThumblin.altText}`}
              width={500}
              height={500}
              className={styles.dekstop_card_Img}
              title={`${data.blogThumblin.title}`}
            />
          </div>
          <div className={styles.dekstop_card_containt}>
            <div className={styles.dekstop_card_title}>
              <h2>{data.blogTitle}</h2>
            </div>
            <div className={styles.dekstop_card_meta_decreption_wrapper}>
              <h3>{data.metaDescription}</h3>
            </div>
            <div className={styles.dekstop_card_action_wrapper}>
              <CardFooter
                pageTitleUrl={data.slug}
                postLikes={data.likes}
                elementID={data._id}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobile_card}>
        <div className={styles.mobile_card_title}>
          <h2>{data.blogTitle}</h2>
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
            <h3>{data.metaDescription}</h3>
          </div>
        </div>
        <div>
          <CardFooter
            pageTitleUrl={data.slug}
            postLikes={data.likes}
            elementID={data._id}
          />
        </div>
      </div>
    </div>
  );
}
