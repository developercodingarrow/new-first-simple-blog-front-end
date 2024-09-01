"use client";
import React, { useState, useEffect, useContext } from "react";
import styles from "./css/likesAction.module.css";
import {
  IoMdHeart,
  IoMdHeartEmpty,
} from "../../../components/ApplicationIcons";
import {
  likeAction,
  unlikeAction,
} from "@/src/Actions//blogActions/blogAction";
import { AppContext } from "@/src/contextApi/AppcontextApi";

export default function LikesAction(props) {
  const { isLogined, handelOpenIsunAuthModel } = useContext(AppContext);
  const userId = isLogined?._id;
  const { postLikes = [], elementID } = props;
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(postLikes.length); // Initialize with the length of likes array

  useEffect(() => {
    // Determine if the user has liked the blog post
    const userHasLiked = postLikes.includes(userId);
    setLiked(userHasLiked);
  }, [postLikes, userId]);

  const handleLike = async () => {
    try {
      const res = await likeAction({ blogId: elementID });
      setLikeCount((prevCount) => prevCount + 1);
      setLiked(true);
    } catch (error) {
      console.error("Failed to like the blog post", error);
    }
  };

  const handleUnlike = async () => {
    try {
      const res = await unlikeAction({ blogId: elementID });
      setLikeCount((prevCount) => prevCount - 1);
      setLiked(false);
    } catch (error) {
      console.error("Failed to unlike the blog post", error);
    }
  };

  return (
    <div>
      {isLogined ? (
        <div className={styles.conatiner}>
          <div
            className={styles.like_iconBox}
            onClick={liked ? handleUnlike : handleLike}
          >
            {liked ? (
              <IoMdHeart className={styles.liked_iconStyle} />
            ) : (
              <IoMdHeartEmpty />
            )}
          </div>
          <div className={styles.likeCount_Wrapper}>{likeCount}</div>
        </div>
      ) : (
        <div className={styles.conatiner}>
          <div
            className={styles.like_iconBox}
            onClick={handelOpenIsunAuthModel}
          >
            <IoMdHeartEmpty />
          </div>
          <div className={styles.likeCount_Wrapper}>{likeCount}</div>
        </div>
      )}
    </div>
  );
}
