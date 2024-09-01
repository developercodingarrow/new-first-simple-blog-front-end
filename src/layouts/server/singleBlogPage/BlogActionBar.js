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
import ProfileElement from "@/src/_components/ssrComponents/profile-element/ProfileElement";
import ActionDotWrapper from "@/src/components/server-components/cards/ActionDotWrapper";

export default function BlogActionBar(props) {
  const { data } = props;
  console.log(data);

  const {
    isOpenCommentModel,
    setisOpenCommentModel,
    handelOpenCommentModel,
    handelCloseCommentModel,
  } = useContext(AppContext);
  // user.userImg.url  altText
  return (
    <div className={styles.flex_container}>
      <ProfileElement
        text={data.user.name}
        smallText={data.updatedAt}
        imgDirectory="usersProfileImg"
        imgUrl={data.user.userImg.url}
        imgAlt={data.user.userImg.altText}
      />
      <div className={styles.csr_blog_action_container}>
        <div className={styles.actions_wrapper}>
          <div>
            <LikesAction postLikes={data.likes} elementID={data._id} />
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
            <ActionDotWrapper elementID={data._id} />
          </div>
        </div>
      </div>
    </div>
  );
}
