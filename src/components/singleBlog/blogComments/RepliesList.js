"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import styles from "./css/commentcomponent.module.css";
import userImg from "../../../../public/web-static-img/auther-image.jpg";
import { MdDeleteForever } from "../../ApplicationIcons";
import { AuthContext } from "@/src/app/_contextApi/authContext";
import myImageLoader from "@/src/app/utils/imageLoader";

export default function RepliesList(props) {
  const { authUser } = useContext(AuthContext);

  const userId = authUser?._id;
  const { replies, comentID, handelDelete } = props;

  return (
    <div className={styles.replies_list}>
      {replies.map((reply) => (
        <div key={reply.id} className={styles.reply_item}>
          <div className={styles.comment_profile}>
            <div className={styles.profile_pic_wrapper}>
              <Image
                src={
                  reply.replyBy?.userImg?.url.startsWith("http")
                    ? reply.replyBy.userImg.url // Use the external URL
                    : `/usersProfileImg/${
                        reply.replyBy?.userImg?.url || "profile-pic.webp"
                      }` // Fallback to local image
                }
                alt={`${
                  reply.replyBy?.userImg?.altText || "User"
                }'s profile picture`}
                width={40} // Width of the profile picture
                height={40} // Height of the profile picture
                className={styles.profile_pic}
                loader={myImageLoader} // Custom loader for image optimization
                placeholder="blur" // Optional for placeholder effect
                blurDataURL="/usersProfileImg/profile-pic.webp" // Default placeholder image
              />
            </div>
            <div className={styles.comment_content}>
              <h6 className={"capitalize_text"}>
                {reply.replyBy?.name || "Anonymous"}
              </h6>
              <p className={styles.comment_text}>{reply.comment}</p>

              {userId === reply?.replyBy?._id && (
                <div className={styles.delete_icon_wrapper}>
                  <MdDeleteForever
                    onClick={() => handelDelete(comentID, reply._id)}
                    className={styles.delete_iconStyle}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
