"use client";
import React, { useContext, useState, useEffect } from "react";
import styles from "./css/blogactionbar.module.css";
import Image from "next/image";
import userImg from "../../../../public/web-static-img/auther-image.jpg";
import {
  FaRegComment,
  CiShare1,
  HiOutlineDotsVertical,
} from "../../../components/ApplicationIcons";
import LikesAction from "@/src/components/client-components/likes/LikesAction";
import { AppContext } from "@/src/contextApi/AppcontextApi";

export default function BlogActionBar(props) {
  const { blog } = props;

  const {
    isOpenCommentModel,
    setisOpenCommentModel,
    handelOpenCommentModel,
    handelCloseCommentModel,
  } = useContext(AppContext);

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
            <h3>{blog.user.name}</h3>
            <div className="small_text_wrapper">@{blog.user.userName}</div>
          </div>
        </div>
      </div>
      <div className={styles.csr_blog_action_container}>
        <div className={styles.actions_wrapper}>
          <div>
            <LikesAction postLikes={blog.likes} elementID={blog._id} />
          </div>
          <div className={styles.dekstop_comment_IconWrapper}>
            <FaRegComment />
          </div>
          <div
            className={styles.mobile_comment_IconWrapper}
            onClick={handelOpenCommentModel}
          >
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
