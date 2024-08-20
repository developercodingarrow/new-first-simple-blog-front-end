"use client";
import React, { useState, useEffect } from "react";
import styles from "./css/blogactionbar.module.css";
import Image from "next/image";
import userImg from "../../../../public/web-static-img/auther-image.jpg";
import {
  FaRegComment,
  CiShare1,
  HiOutlineDotsVertical,
  IoMdHeart,
  IoMdHeartEmpty,
} from "../../../components/ApplicationIcons";
import { likeAction, unlikeAction } from "@/src/Actions/blogActions/blogAction";

export default function BlogActionBar(props) {
  const { blog } = props;
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(blog.likeCount);
  const userId = "66afa6b670b20425b64a7628";

  useEffect(() => {
    // Determine if the user has liked the blog post
    const userHasLiked = blog.likes.includes(userId);
    setLiked(userHasLiked);
  }, [blog.likes, userId]);

  const handleLike = async () => {
    try {
      const res = await likeAction({ blogId: blog._id });
      setLikeCount(res.data.data.likeCount);
      setLiked(true);
    } catch (error) {
      console.error("Failed to like the blog post", error);
    }
  };

  const handleUnlike = async () => {
    try {
      const res = await unlikeAction({ blogId: blog._id });
      setLikeCount(res.data.data.likeCount);
      setLiked(false);
    } catch (error) {
      console.error("Failed to unlike the blog post", error);
    }
  };
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
          <div onClick={liked ? handleUnlike : handleLike}>
            {liked ? <IoMdHeartEmpty /> : <IoMdHeart />} ({likeCount})
          </div>
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
