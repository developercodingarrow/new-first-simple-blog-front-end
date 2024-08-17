"use client";
import React from "react";
import Image from "next/image";
import styles from "./css/commentcomponent.module.css";
import userImg from "../../../../public/web-static-img/auther-image.jpg";
export default function RepliesList(props) {
  const { replies, comentID, handelDelete } = props;
  console.log(replies);
  return (
    <div className={styles.replies_list}>
      {replies.map((reply) => (
        <div key={reply.id} className={styles.reply_item}>
          <div className={styles.comment_profile}>
            <div className={styles.profile_pic_wrapper}>
              <Image
                src={userImg}
                alt="profile picture"
                width={40}
                height={40}
                className={styles.profile_pic}
              />
            </div>
            <div className={styles.comment_content}>
              <h5 className={styles.user_name}>
                {reply.replyBy?.name || "Anonymous"}
              </h5>
              <p className={styles.user_comment}>{reply.comment}</p>
              <button onClick={() => handelDelete(comentID, reply._id)}>
                Delete Reply
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
