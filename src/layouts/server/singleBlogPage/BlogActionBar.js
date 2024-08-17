import React from "react";
import styles from "./css/blogactionbar.module.css";
import Image from "next/image";
import userImg from "../../../../public/web-static-img/auther-image.jpg";
import {
  FaRegComment,
  CiShare1,
  HiOutlineDotsVertical,
} from "../../../components/ApplicationIcons";

export default function BlogActionBar() {
  return (
    <div className={styles.flex_container}>
      <div className={styles.ssr_user_profle_wrapper}>
        <div className={styles.ssr_user_profile_container}>
          <div className={styles.user_img_wrapper}>
            <Image
              src={userImg}
              width={500}
              height={500}
              className={styles.img_style}
            />
          </div>
          <div className={styles.user_sort_detail}>
            <h3>A. M. Champion</h3>
            <div className="small_text_wrapper">@username</div>
          </div>
        </div>
      </div>
      <div className={styles.csr_blog_action_container}>
        <div className={styles.actions_wrapper}>
          <div>
            <FaRegComment />
          </div>
          <div>
            <CiShare1 />
          </div>
          <div>
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
}
